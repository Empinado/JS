<template>
  <div class="filter center">
    <div class="categories">
      <button
        v-for="categorie in categories"
        @click="FILTERED_CATEGORIES(categorie)"
        class="categories__button"
        :class="{ clicked: categorie.isActive }"
        :key="categorie.id"
      >
        {{ categorie.tag }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CategoriesButtons",

  computed: {
    ...mapState(["categories"]),
  },

  methods: {
    ...mapMutations(["FILTERED_CATEGORIES"]),
  },
};
</script>

<style lang="sass" scoped>
.filter
    display: flex
    justify-content: center
    padding-top: 200px
    padding-bottom: 61px
.categories
    border: 1px solid #CDA274
    border-radius: 21px

    &__button
        padding: 26px 66px
        border: 0
        border-radius: 18px
        background: none

        color: #292F36
        text-align: center
        font-family: Jost
        font-size: 18px
        font-style: normal
        font-weight: 600
        line-height: 125%
        letter-spacing: 0.36px
        transition: all 0.3s

.clicked
    color: #FFF
    background: #CDA274
</style>
