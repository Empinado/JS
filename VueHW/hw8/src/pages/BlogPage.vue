<template>
  <div>
    <HeaderTitle
      :title="'Articles & News'"
      :page="'Home / Blog'"
      :active="true"
    />

    <section class="latestPost center">
      <h1 class="latestPost__title">Latest Post</h1>

      <div class="latestPost_description">
        <img
          class="latestPost_description__img"
          src="../assets/latestPost.png"
          alt="latest_post_img"
        />
        <div class="latestPost_description_text">
          <p class="latestPost_description_text__head">
            Low Cost Latest Invented Interior Designing Ideas
          </p>
          <p class="latestPost_description_text__text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.
          </p>
          <p class="latestPost_description_text__text">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>

          <div class="latestPost_description_text_info">
            <p class="latestPost_description_text_info__date">
              26 December,2022
            </p>
            <router-link
              to="/details"
              class="latestPost_description_text_info__link"
              ><svg
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="news center">
      <div class="news_header">
        <h1 class="news_header__title">Articles & News</h1>
      </div>

      <div class="news_box">
        <NewsList v-for="item in news" :news="item" :key="item.id" />
      </div>

      <footer class="news_footer">
        <div class="news_footer_pages">
          <a href="#" class="news_footer_pages__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg>
            <span class="news_footer_pages__link__page">01</span>
          </a>
          <a href="#" class="news_footer_pages__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg>
            <span class="news_footer_pages__link__page">02</span>
          </a>
          <a href="#" class="news_footer_pages__link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            </svg>
            <span class="news_footer_pages__link__page">03</span>
          </a>
          <a href="#" class="news_footer_pages__link nextPage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              <path
                d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderTitle from "@/components/HeaderTitle.vue";
import NewsList from "@/components/NewsList.vue";

export default {
  name: "BlogPage",

  computed: {
    ...mapState(["news"]),
  },

  components: {
    HeaderTitle,
    NewsList,
  },
};
</script>

<style lang="sass" scoped>
.latestPost
    padding-top: 200px

    &__title
        color: #292F36
        font-family: DM Serif Display
        font-size: 50px
        font-style: normal
        font-weight: 400
        line-height: 125%
        letter-spacing: 1px
        padding-bottom: 27px

    &_description
        display: flex
        gap: 65px
        padding: 22px
        margin-bottom: 150px
        border-radius: 62px
        border: 1px solid #E7E7E7
        box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)

        &__img
            border-radius: 50px

        &_text
            display: flex
            flex-direction: column
            justify-content: center
            width: 469px

            &__head
                color: #292F36
                font-family: DM Serif Display
                font-size: 25px
                font-style: normal
                font-weight: 400
                line-height: 125%
                letter-spacing: 0.5px
                padding-bottom: 22px

            &__text
                color: #4D5053
                font-family: Jost
                font-size: 22px
                font-style: normal
                font-weight: 400
                line-height: 150%
                letter-spacing: 0.22px
                padding-bottom: 41px

            &_info
                display: flex
                justify-content: space-between
                align-items: center

                &__date
                    color: #4D5053
                    font-family: Jost
                    font-size: 16px
                    font-style: normal
                    font-weight: 400
                    line-height: 150%
                    letter-spacing: 0.16px
                    text-transform: capitalize

.news
    padding-bottom: 200px

    &_header
        align-items: flex-start
        padding-bottom: 30px

        &__title
            color: #292F36
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 1px

    &_box
        display: grid
        grid-template-columns: repeat(3, 1fr)
        gap: 22px
        justify-items: center

    &_footer
        display: flex
        justify-content: center
        padding-top: 51px

        &_pages
            display: flex
            gap: 20px

            &__link
                position: relative

                &__page
                    position: absolute
                    left: 17px
                    top: 15px

                    color: #4D5053
                    font-family: Jost
                    font-size: 16px
                    font-style: normal
                    font-weight: 500
                    line-height: 150%
                    text-transform: capitalize
</style>
