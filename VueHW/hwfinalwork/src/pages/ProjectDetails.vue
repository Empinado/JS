<template>
  <div>
    <HeaderTitle :active="false" />

    <div class="details center">
      <div class="details_description">
        <h1 class="details_description__title">
          {{ slides[slide].title }}
        </h1>
        <p class="details_description__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
          vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
          maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
          in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum
          vel lectus bibendum commodo.
        </p>
        <p class="details_description__text">
          {{ slides[slide].description }}
        </p>
      </div>

      <div class="details_view">
        <div class="details_view_slide">
          <img
            class="details_view_slide__img"
            :src="require(`@/assets/${slides[slide].img}`)"
            alt=""
          />
          <svg
            class="details_view_slide__zoom"
            width="172"
            height="172"
            viewBox="0 0 172 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1418_52)">
              <circle cx="86" cy="76" r="66" fill="white" />
              <path
                d="M104.433 90.2861L96.0452 81.8984C98.0646 79.21 99.1547 75.9378 99.151 72.5755C99.151 63.9872 92.1638 57 83.5755 57C74.9872 57 68 63.9872 68 72.5755C68 81.1638 74.9872 88.151 83.5755 88.151C86.9378 88.1547 90.21 87.0646 92.8984 85.0452L101.286 93.4329C101.711 93.8125 102.264 94.0151 102.834 93.9991C103.403 93.9832 103.945 93.7499 104.347 93.3472C104.75 92.9445 104.983 92.403 104.999 91.8337C105.015 91.2644 104.812 90.7107 104.433 90.2861ZM72.4501 72.5755C72.4501 70.3751 73.1026 68.2242 74.3251 66.3946C75.5476 64.565 77.2851 63.1391 79.318 62.297C81.3509 61.455 83.5879 61.2346 85.746 61.6639C87.9041 62.0932 89.8864 63.1528 91.4423 64.7087C92.9983 66.2646 94.0578 68.247 94.4871 70.4051C94.9164 72.5632 94.6961 74.8001 93.854 76.833C93.012 78.8659 91.586 80.6035 89.7564 81.8259C87.9269 83.0484 85.7759 83.7009 83.5755 83.7009C80.626 83.6974 77.7982 82.5241 75.7126 80.4384C73.627 78.3528 72.4537 75.5251 72.4501 72.5755Z"
                fill="#CDA274"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1418_52"
                x="0"
                y="0"
                width="172"
                height="172"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0 0.752941 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1418_52"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1418_52"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div class="details_view_numbers">
          <button
            v-for="project in slides"
            class="details_view_numbers__number"
            @click="SLIDER(project)"
            :class="{ current: project.slide }"
            :key="project.id"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  name: "ProjectDetails",

  computed: {
    ...mapState(["slides", "slide"]),
  },

  methods: {
    ...mapMutations(["SLIDER"]),
  },

  components: {
    HeaderTitle,
  },
};
</script>

<style lang="sass" scoped>
.details
    display: flex
    flex-direction: column
    align-items: center
    padding-bottom: 100px

    &_description
        height: 700px
        width: 658px
        padding-top: 170px

        &__title
            color: #292F36
            font-family: DM Serif Display
            font-size: 50px
            font-style: normal
            font-weight: 400
            line-height: 125%
            letter-spacing: 1px

        &__text
            color: #4D5053
            font-family: Jost
            font-size: 22px
            font-style: normal
            font-weight: 400
            line-height: 150%
            letter-spacing: 0.22px
            padding-bottom: 40px

    &_view
        display: flex
        flex-direction: column
        align-items: center

        &_slide
            position: relative

            &__img
                width: 1200px
                height: 800px
                border-radius: 70px

            &__zoom
                position: absolute
                left: 42%
                top: 42%

                &:hover
                    cursor: pointer

        &_numbers
            display: flex
            gap: 10px
            padding-top: 20px

            &__number
                width: 40px
                height: 40px
                border-radius: 50%
                border: 1px solid black
                background: none

                &:hover
                    cursor: pointer
.current
    background: #CDA274
</style>
