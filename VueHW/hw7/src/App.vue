<template>
  <div>
    <!-- <BlogBanner /> -->
    <!-- <ProjectContent /> -->
    <!-- <ProjectDetails /> -->
    <!-- <FooterComp /> -->
    <!-- <HomeWork10 />
    <HeaderComp />
    <FooterComp />
    <HomePage />
    <BlogPage />
    <BlogDitails /> -->
    <HeaderExample />
    <router-view></router-view>
    <!-- отслеживает и отображает нужную страницу -->
  </div>
</template>

<script>
// import HeaderCompVue from "./components/HeaderComp.vue";
// import HeaderExampleVue from "./components/HeaderExample.vue";
// import HomePage from "./components/HomePage.vue";
// import BlogPage from "./components/BlogPage.vue";
// import BlogDitails from "./components/BlogDitails.vue";
// import HeaderComp from "./components/HeaderComp.vue";
// import FooterComp from "./components/FooterComp.vue";
// import HomeWork10 from "./components/HomeWork10.vue";
// import BlogBanner from "./components/BlogBanner.vue";
// import ProjectContent from "./components/ProjectContent.vue";
// import ProjectDetails from "./components/ProjectDetails.vue";
import HeaderExample from "./components/HeaderExample.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    // HomePage,
    // BlogPage,
    // BlogDitails,
    // HeaderComp,
    // FooterComp,
    // HomeWork10,
    // BlogBanner,
    // ProjectContent,
    // ProjectDetails,
    HeaderExample,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}

/* a {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
} */

body {
  margin: 0;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

img {
  width: 100%;
}
</style>
