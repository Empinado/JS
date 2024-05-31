const Tags = {
  data() {
    return {
      tags: [
        {
          id: 1,
          name: "Kitchen",
        },
        {
          id: 2,
          name: "Bedroom",
        },
        {
          id: 3,
          name: "Building",
        },
        {
          id: 4,
          name: "Architecture",
        },
        {
          id: 5,
          name: "Kitchen Planning",
        },
        {
          id: 6,
          name: "Bedroom",
        },
      ],
    };
  },
  template: `
  <div class="tags">
      <h2 class="tags__title">Tags</h2>
      <button v-for="tag in tags" :key="tag.id" class="tags__btn">
        {{tag.name}}
      </button>
    </div>
    `,
};
