<template>
  <div class="news_box__element">
    <img
      class="news_box__element__img"
      :src="require(`@/assets/${news.img}`)"
      alt="news_photo"
    />
    <router-link to="/blog" class="news_box__element__link"
      >{{ news.design }} Design</router-link
    >

    <h2 class="news_box__element__title">{{ news.title }}</h2>

    <div class="news_box__element_description">
      <p class="news_box__element_description__text">{{ news.date }}</p>

      <router-link to="/details" class="news_box__element_description__link">
        <svg
          @click="DETAILS(news.id)"
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
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "NewsList",
  props: ["news"],

  methods: {
    ...mapMutations(["DETAILS"]),
  },
};
</script>

<style lang="sass" scoped>
.news_box__element
    position: relative
    padding: 21px
    border-radius: 62px
    border: 1px solid #E7E7E7
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25)
    transition: background-color 0.3s

    &:hover
        background-color: #F4F0EC

    &:hover circle
        fill: #FFF

    &__img
        border-radius: 45px 45px 0px 0px

    &__link
        position: absolute
        left: 41px
        top: 249px
        color: #4D5053
        font-family: Jost
        font-size: 16px
        font-style: normal
        font-weight: 400
        line-height: 150%
        letter-spacing: 0.16px
        text-transform: capitalize
        border-radius: 8px 8px 8px 0px
        background: #FFF
        padding: 10px
        transition: background-color 0.3s

        &:hover
            background-color: #F4F0EC

    &__title
        color: #292F36
        font-family: DM Serif Display
        font-size: 25px
        font-style: normal
        font-weight: 400
        line-height: 125%
        letter-spacing: 0.5px
        padding-top: 21px
        padding-bottom: 30px

    &_description
        display: flex
        justify-content: space-between
        align-items: center

        &__text
            color: #4D5053
            font-family: Jost
            font-size: 16px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.16px
            text-transform: capitalize

        circle
            transition: fill 0.3s
</style>
