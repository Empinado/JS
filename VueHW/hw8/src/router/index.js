import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import OurProjects from "@/pages/OurProjects.vue";
import ProjectDetails from "@/pages/ProjectDetails.vue";
import Error404Page from "@/pages/Error404Page.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/main",
      name: "Main_Page",
      component: MainPage,
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogPage,
    },
    {
      path: "/details",
      name: "Blog_Details",
      component: BlogDetails,
    },
    {
      path: "/our_projects",
      name: "Our_Projects",
      component: OurProjects,
    },
    {
      path: "/project",
      name: "Projects",
      component: ProjectDetails,
    },
    {
      path: "*",
      name: "Not_Found",
      component: Error404Page,
    },
  ],
});
