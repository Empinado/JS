<template>
  <div class="top" id="app">
    <div class="background">
      <div class="background_lines"></div>
    </div>

    <HeaderComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>

<style lang="sass">
*
    padding: 0
    margin: 0
    box-sizing: border-box

a
    text-decoration: none

.top
    position: relative

.center
    padding-left: calc(50% - 1200px / 2)
    padding-right: calc(50% - 1200px / 2)

.background
    position: absolute
    display: flex
    justify-content: center
    height: 100%
    width: 1200px
    left: calc(50% - 1200px / 2)
    border-left: 1px solid #E7E7E7
    border-right: 1px solid #E7E7E7
    z-index: -1

    &_lines
        width: 400px
        border-left: 1px solid #E7E7E7
        border-right: 1px solid #E7E7E7
        z-index: -1
</style>
