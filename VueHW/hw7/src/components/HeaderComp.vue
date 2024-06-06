<template>
  <header class="header center">
    <div class="header__logo">
      <a href="#"
        ><img class="header__img" src="@/assets/Logo.svg" alt="logo"
      /></a>
      <h1 class="header__title">{{ logoName }}</h1>
    </div>
    <nav class="header__nav">
      <a
        v-for="nav in headerNavs"
        :key="nav.id"
        class="nav__link"
        :href="nav.url"
        >{{ nav.name }}</a
      >
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      logoName: "Interno",
      headerNavs: [
        { name: "Home", url: "#" },
        { name: "Project", url: "#" },
        { name: "Blog", url: "#" },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  margin-top: 44px;
  margin-bottom: 57px;
}
.header__logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.header__title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 125%;
}
.header__img {
  width: 34px;
  height: 34px;
}
.header__nav {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 32px;
  color: #4d5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
}
.header__nav a {
  color: #292f36;
}
</style>
