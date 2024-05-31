const Sort = {
  data() {
    return {
      goods: [
        {
          id: 1,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 101,
          img: "img/img_prod_1.svg",
        },
        {
          id: 2,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 108,
          img: "img/img_prod_2.svg",
        },
        {
          id: 3,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 102,
          img: "img/img_prod_3.svg",
        },
        {
          id: 4,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 125,
          img: "img/img_prod_3.svg",
        },
        {
          id: 5,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 160,
          img: "img/img_prod_2.svg",
        },
        {
          id: 6,
          title: "ELLERY X M'O CAPSULE",
          text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
          price: 100,
          img: "img/img_prod_1.svg",
        },
      ],
    };
  },
  methods: {
    // Методы по сортировке от большего к меньшему и наоборот
    sortUp() {
      this.goods.sort((a, b) => a.price - b.price);
    },
    sortDown() {
      this.goods.sort((a, b) => b.price - a.price);
    },
  },
  //   template содержит html разметку
  template: ` <button @click="sortUp">UP</button>
  <button @click="sortDown">DOWN</button>
  <div class="product-box center">
  <div class="product-box__content">
    <div class="product" v-for="good in goods" :key="good.id">
      <div class="product__img_block">
        <img class="product__img" :src="good.img" alt="img" />

        <div class="product__add">
          <img
            class="product__cart_img"
            src="img/box_img_product.svg"
            alt="box_img"
          />
          <p class="product__add_text">Add to Cart</p>
        </div>
      </div>

      <div class="product__content">
        <a href="product.html" class="product__heading">{{good.title}}</a>
        <p class="product__text">{{good.text}}</p>
        <p class="product__price">{{good.price}}</p>
      </div>
    </div>
  </div>
</div>`,
};
