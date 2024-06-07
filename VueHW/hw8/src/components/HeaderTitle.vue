<template>
  <div class="title">
    <div v-if="this.active" class="title_name">
      <h1 class="title_name__head">{{ this.title }}</h1>
      <p class="title_name__text">{{ this.page }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle",
  props: ["title", "page", "active"],
};
</script>

<style lang="sass" scoped>
.title
    display: flex
    align-items: flex-end
    justify-content: center
    height: 356px
    background-image: url(../assets/banner_photo4.png)
    background-repeat: no-repeat
    background-size: cover
    background-position: 25% 0

    &_name
        display: flex
        flex-direction: column
        align-items: center
        padding: 41px 78px
        border-radius: 37px 37px 0px 0px
        background-color: #FFF

        &__head
            color: #292F36
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%

        &__text
            color: #4D5053
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
</style>
