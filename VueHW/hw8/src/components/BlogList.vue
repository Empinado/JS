<template>
  <div class="blog center">
    <section class="blog_details">
      <BlogInfo />

      <div class="news_header">
        <h1 class="news_header__title">Articles & News</h1>
      </div>

      <div class="news_box">
        <NewsList v-for="item in filteredNews" :news="item" :key="item.id" />
      </div>
    </section>

    <TagsFilter />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BlogInfo from "./BlogInfo.vue";
import NewsList from "./NewsList.vue";
import TagsFilter from "./TagsFilter.vue";

export default {
  name: "BlogList",

  components: {
    BlogInfo,
    NewsList,
    TagsFilter,
  },

  computed: {
    ...mapState(["news"]),
    ...mapGetters(["filteredNews"]),
  },
};
</script>

<style lang="sass" scoped>
.blog
    display: grid
    gap: 52px
    grid-template-columns: 2fr 1fr
    padding-top: 200px

.news_header
        display: flex
        flex-direction: column
        text-align: center
        align-items: center
        padding-bottom: 52px

        &__title
            color: #292F36
            text-align: center
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 1px
.news_box
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 30px
    margin-bottom: 96px
</style>
