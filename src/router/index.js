import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
          component: () => import("../views/Public/ProfileView.vue"),
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
      component: () => import("../views/AdminView.vue"),
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

export default router;
