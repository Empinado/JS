<template>
  <div>
    <HomePage />
    <BlogPage />
    <BlogDitails />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import BlogPage from "./components/BlogPage.vue";
import BlogDitails from "./components/BlogDitails.vue";

export default {
  name: "App",
  components: {
    HomePage,
    BlogPage,
    BlogDitails,
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
</style>
