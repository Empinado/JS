import { createStore } from "vuex";

export default {
  state: {
    projects: [
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
  },

  mutations: {
    SLIDER(state, project) {
      state.slide = project.id;

      state.projects.forEach((project) => {
        project.slide = false;
      });

      project.slide = true;
    },
  },

  getters: {},
};
