import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Products from "../views/Products.vue";
import ProfilePage from "../views/ProfilePage.vue";
import Login from "../views/Login.vue";
import Favorites from "@/views/Favorites.vue";

import { firebaseAuth } from "../../firebase/config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      patch: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      beforeEnter: (to, from, next) => {
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            next();
          } else {
            next("/login");
          }
        });
      },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter: (to, from, next) => {
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            next("/home");
          } else {
            next();
          }
        });
      },
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      beforeEnter: (to, from, next) => {
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            next("/home");
          } else {
            next();
          }
        });
      },
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
    {
      path: "/profile",
      name: "ProfilePage",
      component: ProfilePage,
      beforeEnter: (to, from, next) => {
        firebaseAuth.onAuthStateChanged((user) => {
          if (user) {
            next();
          } else {
            next("/login");
          }
        });
      },
    },
  ],
});

export default router;
