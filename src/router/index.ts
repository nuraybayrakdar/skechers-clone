import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import ProductDetail from "@/views/ProductDetail.vue";
import Products from "../views/Products.vue";
import Favorites from "@/views/Favorites.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/productDetail",
      name: "detail",
      component: ProductDetail,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorites,
    },
    {
      path: "/create",
      name: "Create",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Create.vue"),
    },
    {
      path: "/update/id",
      name: "Update",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Update.vue"),
    },
  ],
});

export default router;
