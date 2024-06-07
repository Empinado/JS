<template>
  <div>
    <!-- аналог тега а -->
    <router-link :to="link.url" v-for="link in links" :key="link.id">
      {{ link.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, title: "home", url: "./" },
        { id: 2, title: "about", url: "./about" },
        { id: 3, title: "contact", url: "./contact" },
      ],
    };
  },
};
</script>

<style scoped></style>
