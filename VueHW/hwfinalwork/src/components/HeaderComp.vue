<template>
  <header class="header center">
    <div class="header_left">
      <router-link class="header_left__link" to="/main">
        <img
          class="header_left__link__logo logo"
          src="../assets/logo.svg"
          alt="Logo"
        />
      </router-link>
    </div>

    <nav class="header_right">
      <router-link class="header_right__link" to="/main">Home</router-link>
      <router-link class="header_right__link" to="/blog">Blog</router-link>
      <router-link class="header_right__link" to="/details"
        >BlogDetails</router-link
      >
      <router-link class="header_right__link" to="/our_projects"
        >OurProjects</router-link
      >
      <router-link class="header_right__link" to="/project"
        >Project</router-link
      >
      <router-link class="header_right__link" to="/404">404</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<style lang="sass" scoped>
.header
    display: flex
    justify-content: space-between
    align-items: center
    padding-top: 53px
    padding-bottom: 57px

    &_right
        display: flex
        justify-content: space-between
        width: 500px

        &__link
            color: #292F36
            text-align: center
            font-family: Jost
            font-size: 20px
            font-style: normal
            font-weight: 400
</style>
