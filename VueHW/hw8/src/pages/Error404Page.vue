<template>
  <section class="page404 center">
    <div class="page404_text">
      <h1 class="page404_text__title">404</h1>
      <p class="page404_text__description">
        We are sorry, but the page you requested was not found
      </p>

      <router-link to="/main" class="page404_text__link">
        Back To Home
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>

    <div class="page404_picture">
      <img class="page404_picture__img" src="@/assets/page_404.png" alt="404" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Error404Page",
};
</script>

<style lang="sass" scoped>
.page404
    position: relative
    display: flex
    height: 1045px
    align-items: center
    margin-bottom: 50px

    &_text
        display: flex
        flex-direction: column
        width: 569px
        gap: 44px

        &__title
            color: #CDA274
            font-family: DM Serif Display
            font-size: 250px
            font-style: normal
            font-weight: 400
            line-height: 70%

        &__description
            color: #292F36
            font-family: DM Serif Display
            font-size: 35px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.35px

        &__link
            width: 253px
            display: flex
            gap: 10px
            align-items: center

            color: #FFF
            font-family: Jost
            font-size: 18px
            font-weight: 600

            padding: 26px 49px 26px 48px

            border-radius: 18px
            background: #292F36
            box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35)

    &_picture
        position: absolute
        right: 0

        &__img
            border-radius: 0px 0px 0px 353px
</style>
