<template>
  <div class="blog-page">
    <header class="header center">
      <div class="header__logo">
        <img class="header__img" src="@/assets/img/Logo.svg" alt="logo" />
        <h1 class="header__title">Interno</h1>
      </div>
      <nav class="header__nav">
        <a class="nav__link" href="#">Home</a
        ><a class="nav__link" href="#">Project</a
        ><a class="nav__link" href="#">Blog</a>
      </nav>
    </header>
    <div class="blog-banner">
      <div class="blog-banner__container center">
        <h2 class="blog-banner__container_title">Articles & News</h2>
        <p class="blog-banner__container_text">Home / Blog</p>
      </div>
    </div>

    <div class="post center">
      <h2 class="post__title">Latest Post</h2>
      <div class="post__container">
        <img class="post__img" src="@/assets/img/post/post.svg" alt="item" />
        <div class="post__container_right">
          <h2 class="post__container_title">
            Low Cost Latest Invented Interior Designing Ideas
          </h2>
          <p class="post__container_text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
            <br />
            <br />
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div class="post__container_btn">
            <p class="post__container_btn_date">26 December,2022</p>
            <img
              class="post__container_btn_img"
              src="@/assets/img/vector/ellipseWithArrow.svg"
              alt="ellipseWithArrow"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="news center">
      <div class="news__top">
        <h2 class="news__top_title">Articles & News</h2>
        <p class="news__top_text">
          It is a long established fact that a reader will be distracted by the
          of readable content of <br />a page when lookings at its layouts the
          points of using.
        </p>
      </div>
      <div class="news__container">
        <div v-for="article in news" :key="article.id" class="news__item">
          <div class="news__item_top">
            <img class="news__item_img" :src="article.imgUrl" :alt="news_img" />
            <button class="news__item_btn">{{ article.btnText }}</button>
          </div>
          <div class="news__item_btm">
            <h2 class="news__item_btm_title">{{ article.title }}</h2>
            <div class="news__item_btm_date">
              <p class="news__item_btm_date_text">{{ article.date }}</p>
              <img
                class="news__item_btm_btn"
                src="@/assets/img/vector/ellipseWithArrow.svg"
                alt="ellipseWithArrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="news__page-scroll">
        <div class="news__page-scroll_btn">1</div>
        <div class="news__page-scroll_btn">2</div>
        <div class="news__page-scroll_btn">3</div>
        <div class="news__page-scroll_btn">
          <img
            class="news__page-scroll_img"
            src="@/assets/img/vector/justArrow.svg"
            alt="arrow"
          />
        </div>
      </div>
    </div>
    <footer class="footer center">
      <div class="footer__logo">
        <div class="footer__logo_container">
          <img
            class="footer__logo_img"
            src="@/assets/img/Logo.svg"
            alt="logo"
          />
          <h1 class="footer__logo_title">Interno</h1>
        </div>
        <p class="footer__logo_text">
          It is a long established fact that a reader <br />will be distracted
          lookings.
        </p>
        <div class="footer__logo_links">
          <a class="footer__logo_link" href="#"
            ><img
              class="footer__logo_link_img"
              src="@/assets/img/social/twitter.svg"
              alt="twitter"
          /></a>
          <a class="footer__logo_link" href="#"
            ><img
              class="footer__logo_link_img"
              src="@/assets/img/social/in.svg"
              alt="twitter"
          /></a>
        </div>
      </div>
      <div class="footer__pages">
        <h2 class="footer__pages_title">Pages</h2>
        <nav class="footer__nav">
          <a class="nav__link" href="#">Home</a
          ><a class="nav__link" href="#">Project</a
          ><a class="nav__link" href="#">Blog</a>
        </nav>
      </div>
      <div class="footer__contacts">
        <h2 class="footer__contacts_title">Contact</h2>
        <p class="footer__contacts_text">
          55 East Birchwood Ave.<br />Brooklyn, New York 11201
        </p>
        <p class="footer__contacts_text">contact@interno.com</p>
        <p class="footer__contacts_text">(123) 456 - 7890</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}

a {
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
}

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
.header__title,
.footer__logo_title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 125%;
}
.header__img,
.footer__logo_img {
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

.blog-banner {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 356px;
  background-image: url("@/assets/img/blogBanner.png");
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

.post {
  margin-bottom: 150px;
}
.post__title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 125%;
  color: #292f36;
  padding-bottom: 27px;
}
.post__container {
  display: flex;
  flex-direction: row;
  border: 1px solid #e7e7e7;
  border-radius: 52px;
  padding: 22px;
}
.post__container_right {
  padding-top: 29px;
  width: 469px;
  height: 198px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 65px;
}
.post__container_title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  color: #292f36;
  padding-bottom: 22px;
}
.post__container_text {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #4d5053;
  padding-bottom: 41px;
}
.post__img {
  border-radius: 50px;
  width: 569px;
  height: 478px;
}
.post__container_btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.post__container_btn_date {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #4d5053;
}
.post__container_btn_img {
  width: 52px;
  height: 52px;
}

.news {
  margin-top: 96px;
}
.news__container {
  display: flex;
  flex-direction: row;
  gap: 27px;
  flex-wrap: wrap;
}
.news__top {
  text-align: center;
  margin-bottom: 52px;
}
.news__top_title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 125%;
  color: #292f36;
}
.news__top_text {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #4d5053;
}
.news__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 382px;
  padding: 21px;
  border: 1px solid #e7e7e7;
  border-radius: 62px;
  box-sizing: border-box;
}
.news__item_top {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
}
.news__item_img {
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
}
.news__item_btn {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 129px;
  height: 41px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: #4d5053;
  border: none;
  background-color: #fff;
  border-radius: 8px 8px 8px 0px;
}
.news__item_btm {
  padding-top: 21px;
}
.news__item_btm_title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  color: #292f36;
  padding-bottom: 30px;
}
.news__item_btm_date {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.news__item_btm_date_text {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #4d5053;
}
.news__item_btm_btn {
  width: 52px;
  height: 52px;
}
.news__page-scroll {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
.news__page-scroll_btn {
  margin-top: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  color: #292f36;
  border: 1px solid #cda274;
  border-radius: 50%;
}
.news__page-scroll_btn:active {
  border: 1px solid #f4f0ec;
  background-color: #f4f0ec;
}
.news__page-scroll_img {
  width: 6px;
  grid-template: 13px;
}

.footer {
  padding-top: 200px;
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
} /*# sourceMappingURL=style.css.map */
</style>
