<template>
  <div class="blog-banner">
    <div class="blog-banner__container center">
      <h2 class="blog-banner__container_title">{{ title }}</h2>
      <p class="blog-banner__container_text">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Articles & News",
      text: "Home / Blog",
    };
  },
};
</script>
<style lang="css" scoped>
.blog-banner {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 356px;
  background-image: url("@/assets/projectBanner.png");
  margin-bottom: 200px;
}
.blog-banner__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 503px;
  height: 178px;
  background-color: #fff;
  border-radius: 37px 37px 0px 0px;
}
.blog-banner__container_title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 125%;
  color: #292f36;
}
.blog-banner__container_text {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #4d5053;
}
</style>
