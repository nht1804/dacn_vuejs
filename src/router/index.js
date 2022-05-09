import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Layout/HomeView.vue";
import axios from "axios";
import store from "@/store/index.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/404.vue"),
    },
    {
      path: "/leasing",
      name: "leasing",
      component: () => import("../views/Public/LeasingView.vue"),
    }
    ,
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "",
          name: "index",
          component: () => import("../views/Public/IndexView.vue"),
        },
        {
          path: "/car",
          name: "car",
          component: () => import("../views/Public/CarView.vue"),
        },
        {
          path: "/car/:id",
          name: "carDetail",
          component: () => import("../views/Public/CarDetailView.vue"),
          beforeEnter: async (to, from) => {
            let status = await axios
              .get(`http://localhost:8080/api/Car/id/${to.params.id}`)
              .then((res) => {
                return res.data.status;
              })
              .catch((err) => {
                console.error(err);
              });
            if (status !== "SUCCESS") {
              return { name: "404" };
            }
          },
        },
        {
          path: "/profile",
          name: "profile",
          component: () => import("../views/Layout/ProfileView.vue"),
          meta: {
            reqAuth: true,
          },
          children: [
            {
              path: "",
              name: "userDetail",
              component: () => import("../views/Public/UserDetailView.vue"),
            },
            {
              path: "/history",
              name: "history",
              component: () => import("../views/Public/HistoryView.vue"),
            },
            {
              path: "/carleasing",
              name: "carleasing",
              component: () => import("../views/Public/CarLeasingView.vue"),
            },
          ],
        },
        {
          path: "/tutorial",
          name: "tutorial",
          component: () => import("../views/Public/TutorialView.vue"),
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("@/views/Public/AboutView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Public/LoginView.vue"),
      beforeEnter: async (to, from) => {
        let data = await axios
          .get(`http://localhost:8080/api/Login/Check/${cookie().token}`)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            console.error(err);
          });
        if (data.status === "SUCCESS") {
          return { name: "userDetail" };
        }
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/Layout/AdminView.vue"),
      meta: {
        reqAuth: true,
        reqRole: true,
      },
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("../views/Admin/DashBoardView.vue"),
          meta: { page: "dashboard" },
        },
        {
          path: "CarTable",
          name: "carTable",
          component: () => import("../views/Admin/CarTableView.vue"),
          meta: { page: "carTable" },
        },
        {
          path: "UserTable",
          name: "userTable",
          component: () => import("../views/Admin/UserTableView.vue"),
          meta: { page: "userTable" },
        },
        {
          path: "RoleTable",
          name: "roleTable",
          component: () => import("../views/Admin/RoleTableView.vue"),
          meta: { page: "roleTable" },
        },
      ],
    },
  ],
});
function cookie() {
  return Object.fromEntries(
    document.cookie
      .split("; ")
      .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
  );
}
async function verifyToken() {
  axios
    .get(`http://localhost:8080/api/Login/Check/${cookie().token}`)
    .then((res) => {
      store.state.userName = null;
      store.state.roleLevel = null;
      let data = res.data;
      if (data.status === "SUCCESS") {
        store.state.userName = data.data.userName;
        store.state.roleLevel = data.data.role.roleLevel;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
router.beforeResolve(async (to, from) => {
  verifyToken();
  if (to.meta.reqAuth && store.state.userName === null && !to.meta.reqRole) {
    return { name: "login" };
  }
  if (
    to.meta.reqAuth &&
    to.meta.reqRole &&
    store.state.userName === null &&
    (store.state.roleLevel > 1 || store.state.roleLevel === null)
  ) {
    return { name: "404" };
  }
});
export default router;
