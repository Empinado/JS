//как правило название компонентов и их констант пишется с большой буквы
const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    minus() {
      this.counter--;
    },
  },
  //   template содержит html разметку
  template: `
<div>
    <h2>{{counter}}</h2>
    <button @click="add">+1</button>
    <button @click="minus">_1</button>
</div>
  `,
};
