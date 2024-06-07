<template>
  <div class="blog_tags">
    <h1 class="blog_tags__title">Tags</h1>

    <div class="blog_tags_filters">
      <button
        v-for="design in designs"
        @click="FILTERED_NEWS(design)"
        class="blog_tags_filters__button"
        :class="{ clicked: design.isActive }"
        :key="design.id"
      >
        {{ design.tag }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "TagsFilter",

  computed: {
    ...mapState(["designs"]),
  },

  methods: {
    ...mapMutations(["FILTERED_NEWS"]),
  },
};
</script>

<style lang="sass" scoped>
.blog_tags
    position: sticky
    top: 50px
    height: 200px
    padding-bottom: 250px

    &__title
        color: #292F36
        font-family: DM Serif Display
        font-size: 25px
        font-style: normal
        font-weight: 400
        line-height: 125%
        letter-spacing: 0.5px
        padding-bottom: 24px

    &_filters
        display: flex
        gap: 10px
        flex-wrap: wrap

        &__button
            color: #292F36
            text-align: center
            font-family: Jost
            font-size: 18px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 0.36px
            padding: 9px 30px
            border-radius: 10px
            background: #F4F0EC
            border: none
            transition: all 0.3s

            &:hover
                cursor: pointer

.clicked
    color: #FFF
    background: #292F36
</style>
