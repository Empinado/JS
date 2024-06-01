<template>
  <div class="blog-ditails">
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
    <div class="blog-banner"></div>
    <main class="blog center">
      <div class="blog__page">
        <h2 class="blog__title">
          Let’s Get Solution for Building Construction Work
        </h2>
        <img
          class="blog__img"
          src="@/assets/img/blog/blog_1.png"
          alt="blog_img"
        />
        <div class="blog__date">
          <p class="blog__date_text">26 December,2022</p>
          <p class="blog__date_text">Interior / Home / Decore</p>
        </div>
        <p class="blog__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injecthumour, or randomised words
          which don't look even slightly believable. Embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend to
          repeat predefined chunks as necessary.
        </p>
        <div class="blog__quote">
          <img
            class="blog__quote_img"
            src="@/assets/img/blog/quotes.svg"
            alt=""
          />
          <p class="blog__quote_text">
            The details are not the details.<br />They make the design.
          </p>
        </div>
        <h2 class="blog__title">Design sprints are great</h2>
        <p class="blog__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
        <section class="blog__ul">
          <p class="blog__text">
            <span>1</span>Contrary to popular belief.There are many variations
            of passages of Lorem Ipsum available, but the majority have
            suffered.
          </p>
          <p class="blog__text">
            <span>2</span>Contrary to popular belief.There are many variations
            of passages of Lorem Ipsum available, but the majority have
            suffered.
          </p>
          <p class="blog__text">
            <span>3</span>Contrary to popular belief.There are many variations
            of passages of Lorem Ipsum available, but the majority have
            suffered.
          </p>
        </section>
        <img
          class="blog__img2"
          src="@/assets/img/blog/blog_2.png"
          alt="blog_img"
        />
        <p class="blog__text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.Contrary to popular belief.There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered.
        </p>
      </div>
      <div class="tags">
        <h2 class="tags__title">Tags</h2>
        <div class="tags__container">
          <button
            @click="switchPage(tag.id)"
            v-for="tag in tags"
            :key="tag.id"
            class="tags__btn"
          >
            {{ tag.name }}
          </button>
        </div>
      </div>
    </main>
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
export default {
  data() {
    return {
      tags: [
        {
          id: 1,
          name: "Kitchen",
        },
        {
          id: 2,
          name: "Bedroom",
        },
        {
          id: 3,
          name: "Building",
        },
        {
          id: 4,
          name: "Architecture",
        },
        {
          id: 5,
          name: "Kitchen Planning",
        },
        {
          id: 6,
          name: "Bedroom",
        },
      ],
    };
  },
};
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
  height: 351px;
  background-image: url("@/assets/img/blogBanner.png");
  margin-bottom: 200px;
}

.blog {
  display: flex;
  flex-direction: row;
  margin-bottom: 96px;
}
.blog__page {
  max-width: 799px;
}
.blog__title {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 125%;
  color: #292f36;
  margin-bottom: 21px;
}
.blog__img {
  max-width: 799px;
  min-height: 539px;
}
.blog__img2 {
  max-width: 799px;
  min-height: 365px;
  padding-bottom: 35px;
}
.blog__date {
  padding-top: 46px;
  padding-bottom: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.blog__date_text {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #4d5053;
}
.blog__text {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: #4d5053;
}
.blog__text span {
  color: #cda274;
  padding-right: 14px;
}
.blog__quote {
  margin-top: 35px;
  height: 267px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  border-radius: 50px;
  background-color: #f4f0ec;
  color: #cda274;
  margin-bottom: 27px;
}
.blog__quote_img {
  width: 85px;
  height: 113px;
}
.blog__quote_text {
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 150%;
  font-style: italic;
}
.blog__ul {
  padding-top: 24px;
  padding-bottom: 44px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-right: 66px;
}

.tags {
  margin-left: 52px;
  display: flex;
  flex-direction: column;
}
.tags__title {
  display: flex;
  justify-content: start;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  color: #292f36;
  padding-bottom: 24px;
}
.tags__container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tags__btn {
  display: flex;
  align-items: center;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #4d5053;
  border-radius: 10px;
  height: 41px;
  padding: 9px 30px 9px 30px;
  border: none;
  background-color: #f4f0ec;
}
.tags__btn:active {
  background-color: #4d5053;
  color: #fff;
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
