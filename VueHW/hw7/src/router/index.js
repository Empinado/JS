/* eslint-disable */

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import contactPage from "@/views/contactPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import notFoundPage from "@/views/notFoundPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/AboutPage",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/contactPage",
    name: "contact",
    component: contactPage,
  },
  {
    path: "/:CatchAll(.*)",
    name: "404",
    component: notFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
