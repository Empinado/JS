<template>
  <footer class="footer center">
    <div class="footer__logo">
      <div class="footer__logo_container">
        <a href="#"
          ><img class="footer__logo_img" src="@/assets/Logo.svg" alt="logo"
        /></a>
        <h1 class="footer__logo_title">{{ logoName }}</h1>
      </div>
      <p class="footer__logo_text">
        {{ footerLogoText }}
      </p>
      <div class="footer__logo_links">
        <a
          v-for="link in footerSocLinks"
          :key="link.id"
          class="footer__logo_link"
          :href="link.url"
          ><img class="footer__logo_link_img" :src="link.img" alt="twitter"
        /></a>
      </div>
    </div>
    <div class="footer__pages">
      <h2 class="footer__pages_title">Pages</h2>
      <nav class="footer__nav">
        <a
          v-for="nav in footerNavs"
          :key="nav.id"
          class="nav__link"
          :href="nav.url"
          >{{ nav.name }}</a
        >
      </nav>
    </div>
    <div class="footer__contacts">
      <h2 class="footer__contacts_title">Contact</h2>
      <p class="footer__contacts_text" v-html="address"></p>
      <p class="footer__contacts_text">{{ email }}</p>
      <p class="footer__contacts_text">{{ phoneNumber }}</p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      logoName: "Interno",
      footerLogoText:
        "It is a long established fact that a reader will be distracted lookings.",
      address: "55 East Birchwood Ave.<br />Brooklyn, New York 11201",
      email: "contact@interno.com",

      phoneNumber: "(123) 456 - 7890",
      footerSocLinks: [
        { img: require("@/assets/social/twitter.svg"), url: "#" },
        { img: require("@/assets/social/in.svg"), url: "#" },
      ],
      footerNavs: [
        { name: "Home", url: "#" },
        { name: "Project", url: "#" },
        { name: "Blog", url: "#" },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
.footer {
  padding-top: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 272px;
  margin-bottom: 134px;
}
.footer__logo {
  display: flex;
  flex-direction: column;
}
.footer__logo_title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 125%;
}
.footer__logo_img {
  width: 34px;
  height: 34px;
}
.footer__logo_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 18px;
}
.footer__logo_img {
  padding-right: 10px;
}
.footer__logo_text {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #4d5053;
  max-width: 450px;
  padding-bottom: 21px;
}
.footer__logo_links {
  display: flex;
  gap: 54px;
}
.footer__logo_link_img {
  width: 18px;
  height: 22px;
}
.footer__pages {
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding-right: 322px;
}
.footer__pages_title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  color: #292f36;
}
.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 27px;
}
.footer__nav a {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #4d5053;
}
.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 27px;
}
.footer__contacts_title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  color: #292f36;
}
.footer__contacts_text {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #4d5053;
}
</style>
