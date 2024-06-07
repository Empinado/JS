<template>
  <div>
    <HeaderTitle :active="false" />

    <BlogList />
  </div>
</template>

<script>
import BlogList from "@/components/BlogList.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  name: "BlogDetails",

  components: {
    BlogList,
    HeaderTitle,
  },
};
</script>

<style lang="sass" scoped></style>
