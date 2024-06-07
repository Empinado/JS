<template>
  <div>
    <HeaderTitle
      :title="'Our Project'"
      :page="'Home / Project'"
      :active="true"
    />

    <CategoriesButtons />

    <div class="projects_box center">
      <ProjectList
        v-for="item in filteredCategories"
        :project="item"
        :key="item.id"
      />
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoriesButtons from "@/components/CategoriesButtons.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "OurProjects",

  components: {
    CategoriesButtons,
    ProjectList,
    HeaderTitle,
  },

  computed: {
    ...mapGetters(["filteredCategories"]),
  },
};
</script>

<style lang="sass" scoped>
.projects_box
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 28px

.news_footer
    display: flex
    justify-content: center
    padding-top: 61px
    padding-bottom: 200px

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
