import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [
      {
        id: 1,
        img: "news1.png",
        design: "Kitchen",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: ["Kitchen", "Kitchen Planning", ""],
      },
      {
        id: 2,
        img: "news2.png",
        design: "Living",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        date: "22 December,2022",
        tag: ["Bedroom", ""],
      },
      {
        id: 3,
        img: "news3.png",
        design: "Interior",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        tag: ["Building", "Architecture", ""],
      },
      {
        id: 4,
        img: "news4.png",
        design: "Kitchen",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tag: ["Kitchen", "Kitchen Planning", ""],
      },
      {
        id: 5,
        img: "news5.png",
        design: "Living",
        title: "Low Cost Latest Invented Interior Designing Ideas",
        date: "22 December,2022",
        tag: ["Bedroom", ""],
      },
      {
        id: 6,
        img: "news6.png",
        design: "Interior",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        tag: ["Building", "Architecture", ""],
      },
    ],

    designs: [
      {
        tag: "Kitchen",
        isActive: false,
      },
      {
        tag: "Bedroom",
        isActive: false,
      },
      {
        tag: "Building",
        isActive: false,
      },
      {
        tag: "Architecture",
        isActive: false,
      },
      {
        tag: "Kitchen Planning",
        isActive: false,
      },
      {
        tag: "Bathroom",
        isActive: false,
      },
    ],
    buttonTag: "",
    detailedBlog: 1,

    projects: [
      {
        id: 1,
        img: "project1.png",
        categorie: "Bed Room",
        title: "Minimal Bedroom",
        type: "Decor / Architecture",
        tag: ["Bed Room"],
        favorite: true,
      },
      {
        id: 2,
        img: "project2.png",
        categorie: "Bed Room",
        title: "Minimal Bedroom",
        type: "Decor / Architecture",
        tag: ["Bed Room"],
        favorite: false,
      },
      {
        id: 3,
        img: "project3.png",
        categorie: "Bed Room",
        title: "Minimal Bedroom",
        type: "Decor / Architecture",
        tag: ["Bed Room"],
        favorite: false,
      },
      {
        id: 4,
        img: "project4.png",
        categorie: "Bed Room",
        title: "Minimal Bedroom",
        type: "Decor / Architecture",
        tag: ["Bed Room"],
        favorite: true,
      },
      {
        id: 5,
        img: "project5.png",
        categorie: "Bed Room",
        title: "Minimal Bedroom",
        type: "Decor / Architecture",
        tag: ["Bed Room"],
        favorite: false,
      },
      {
        id: 6,
        img: "project6.png",
        categorie: "Bed Room",
        title: "Minimal Bedroom",
        type: "Decor / Architecture",
        tag: ["Bed Room"],
        favorite: false,
      },
      {
        id: 7,
        img: "project7.png",
        categorie: "Bed Room",
        title: "Minimal Bedroom",
        type: "Decor / Architecture",
        tag: ["Bed Room"],
        favorite: false,
      },
      {
        id: 8,
        img: "project8.png",
        categorie: "Bed Room",
        title: "Minimal Bedroom",
        type: "Decor / Architecture",
        tag: ["Bed Room"],
        favorite: false,
      },
      {
        id: 9,
        img: "project2.png",
        categorie: "Bathroom",
        title: "Bathroom",
        type: "Decor / Architecture",
        tag: ["Bathroom"],
        favorite: true,
      },
      {
        id: 10,
        img: "project3.png",
        categorie: "Bathroom",
        title: "Bathroom",
        type: "Decor / Architecture",
        tag: ["Bathroom"],
        favorite: false,
      },
      {
        id: 11,
        img: "project2.png",
        categorie: "Kitchan",
        title: "Kitchan",
        type: "Decor / Architecture",
        tag: ["Kitchan"],
        favorite: false,
      },
      {
        id: 12,
        img: "project6.png",
        categorie: "Kitchan",
        title: "Kitchan",
        type: "Decor / Architecture",
        tag: ["Kitchan"],
        favorite: true,
      },
      {
        id: 13,
        img: "project7.png",
        categorie: "Living Area",
        title: "living Area",
        type: "Decor / Architecture",
        tag: ["Living Area"],
        favorite: true,
      },
      {
        id: 14,
        img: "project8.png",
        categorie: "Living Area",
        title: "Living Area",
        type: "Decor / Architecture",
        tag: ["Living Area"],
        favorite: true,
      },
    ],
    categories: [
      {
        tag: "Bathroom",
        isActive: false,
      },
      {
        tag: "Bed Room",
        isActive: true,
      },
      {
        tag: "Kitchan",
        isActive: false,
      },
      {
        tag: "Living Area",
        isActive: false,
      },
    ],
    categorieTag: "Bed Room",

    slides: [
      {
        id: 0,
        title: "Minimal Look Bedrooms",
        description:
          "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
        img: "slide_img.png",
        slide: true,
      },
      {
        id: 1,
        title: "Minimal Look Kitchan",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde optio magnam recusandae temporibus nostrum amet molestiae id voluptates harum dolores.",
        img: "latestPost.png",
        slide: false,
      },
      {
        id: 2,
        title: "Minimal Look Bathroom",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, nam?",
        img: "project8.png",
        slide: false,
      },
    ],
    slide: 0,

    numbers: [
      {
        title: "Years Of Experience",
        number: 12,
      },
      {
        title: "Success Project",
        number: 85,
      },
      {
        title: "Active Project",
        number: 15,
      },
      {
        title: "Happy Customers",
        number: 95,
      },
    ],
  },

  mutations: {
    SLIDER(state, project) {
      state.slide = project.id;

      state.slides.forEach((project) => {
        project.slide = false;
      });

      project.slide = true;
    },

    DETAILS(state, id) {
      state.detailedBlog = id;
    },

    FILTERED_CATEGORIES(state, categorie) {
      state.categorieTag = categorie.tag;
      categorie.isActive = true;

      state.categories.forEach((tag) => {
        if (tag.tag !== state.categorieTag) {
          tag.isActive = false;
        }
      });
    },

    FILTERED_NEWS(state, design) {
      if (state.buttonTag === design.tag) {
        state.buttonTag = "";
      } else {
        state.buttonTag = design.tag;
      }

      state.designs.forEach((tag) => {
        if (tag.tag === state.buttonTag) {
          tag.isActive = !tag.isActive;
        } else {
          tag.isActive = false;
        }
      });
    },
  },

  getters: {
    filteredNews(state) {
      return state.news.filter((item) => item.tag.includes(state.buttonTag));
    },

    filteredCategories(state) {
      return state.projects.filter((item) =>
        item.tag.includes(state.categorieTag)
      );
    },
  },
});
