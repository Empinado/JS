<template>
  <div class="project center">
    <!-- При клике на кнопку мы вызываем метод setActiveButton, который устанавливает activeBtn в значение имени выбранной кнопки.Мол присвой активБтн кнопке, если нажимаемая кнопка ровна атрибуту имя -->
    <div class="project__top">
      <button
        v-for="title in btnTitles"
        :key="title.name"
        @click="setActiveButton(title.name)"
        :class="{ activeBtn: activeBtn === title.name }"
        class="project__btn"
      >
        {{ title.name }}
      </button>
    </div>

    <div class="project__container">
      <div
        class="project__item"
        v-for="project in projects.filter(
          (project) => project.tag == activeBtn
        )"
        :key="project.id"
      >
        <img class="project__img" :src="project.url" :alt="project.name" />
        <div class="project__desc">
          <div class="project__desc_text">
            <h2 class="project__title">{{ project.title }}</h2>
            <p class="project__text">{{ project.text }}</p>
          </div>

          <img
            class="project__item_btn"
            src="@/assets/vector/ellipseWithArrow.svg"
            alt="ellipseWithArrow"
          />
        </div>
      </div>
    </div>
    <div class="project__page-scroll">
      <div class="project__page-scroll_btn">1</div>
      <div class="project__page-scroll_btn">2</div>
      <div class="project__page-scroll_btn">3</div>
      <div class="project__page-scroll_btn">
        <img
          class="project__page-scroll_img"
          src="@/assets/vector/justArrow.svg"
          alt="arrow"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // В этом примере мы используем переменную activeBtn, чтобы отслеживать имя активной кнопки.
      activeBtn: "Bathroom",
      btnTitles: [
        { name: "Bathroom" },
        { name: "Bed Room" },
        { name: "Kitchan" },
        { name: "Living Area" },
      ],
      projects: [
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project1.png"),
          tag: "Bathroom",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project2.png"),
          tag: "Bathroom",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project3.png"),
          tag: "Bed Room",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project4.png"),
          tag: "Bed Room",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project5.png"),
          tag: "Kitchan",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project6.png"),
          tag: "Kitchan",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project7.png"),
          tag: "Living Area",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project8.png"),
          tag: "Living Area",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project1.png"),
          tag: "Bathroom",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project1.png"),
          tag: "Bathroom",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project2.png"),
          tag: "Bathroom",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project3.png"),
          tag: "Bed Room",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project4.png"),
          tag: "Bed Room",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project5.png"),
          tag: "Kitchan",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project6.png"),
          tag: "Kitchan",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project7.png"),
          tag: "Living Area",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project8.png"),
          tag: "Living Area",
        },
        {
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          url: require("@/assets/projects/project1.png"),
          tag: "Bathroom",
        },
      ],
    };
  },
  methods: {
    setActiveButton(buttonName) {
      this.activeBtn = buttonName;
    },
  },
};
</script>
<style lang="css">
.project__top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.project__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 74px;
  width: 219px;
  color: #292f36;
  border-radius: 18px;
  background-color: #fff;
}
.activeBtn {
  background-color: #cda274;
}
.project__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  padding-top: 61px;
}
.project__item {
  box-sizing: border-box;
}
.project__desc {
  display: flex;

  height: 70px;
  position: relative;
}
.project__desc_text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.project__item_btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70px;
  height: 70px;
}
.project__page-scroll {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
.project__page-scroll_btn {
  margin-top: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  color: #292f36;
  border: 1px solid #cda274;
  border-radius: 50%;
}
.project__page-scroll_btn:active {
  border: 1px solid #f4f0ec;
  background-color: #f4f0ec;
}
.project__page-scroll_img {
  width: 6px;
  grid-template: 13px;
}
</style>
