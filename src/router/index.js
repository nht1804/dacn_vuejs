import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Layout/HomeView.vue";
import axios from "axios";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
router.beforeEach((to, from) => {
  if (to.meta.reqAuth && checkLog() === false) {
    return { name: "login" };
  }
  if (to.meta.reqAuth && to.meta.reqRole) {
    return { name: "login" };
  }
});
function checkLog() {
  var cookie = Object.fromEntries(
    document.cookie
      .split("; ")
      .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
  );
  let url = "http://localhost:8080/api/Login/Check/";
  if (typeof cookie.token !== "undefined") {
    axios
      .get(url + cookie.token)
      .then((res) => {
        if (res.data.status === "SUCCESS") {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  } else {
    return false;
  }
}
export default router;
