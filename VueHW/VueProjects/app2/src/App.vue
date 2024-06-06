<template>
  <div>
    <h1>First task</h1>
    <!-- это каунт из index js в state-->
    <p>{{ count }}</p>
    <!-- Теперь мы должны подключить мутации -->
    <button @click="ADD">+</button>
    <button @click="MINUS">-</button>
    <hr />
    <h1>Task 2</h1>
    <ul>
      <li v-for="item in cartItem" :key="item.id">
        {{ item }}
      </li>
    </ul>
    <button @click="ADD_ITEM({ id: 1, name: 'Товар', price: 10 })">
      Добавить в корзину
    </button>
    <p>Количество товаров в корзине: {{ totalItems }}</p>
    <p>Общая стоимость товаров в корзине: {{ totalPrice }}</p>
    <hr />
    <h1>Task 3</h1>
    <ul>
      <li v-for="itemData in data" :key="itemData">
        {{ itemData }}
      </li>
    </ul>
    <button @click="fetchData">Получение данных</button>
  </div>
</template>

<script>
//1. подключаем state из index js чтобы app видел данные
//2. после нам понадобились мутации mapMutations
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  // поскольку наши мутации это методы, туда их и инициализурем

  computed: {
    //через реструкторизацию(...) мы достаем нужные нам значение из state
    //в нашем случае это count
    ...mapState(["count", "data"]),
    ...mapGetters(["cartItem", "totalItems", "totalPrice"]),
  },
  methods: {
    ...mapMutations(["ADD", "MINUS", "ADD_ITEM"]),
    ...mapActions(["fetchData"]),
  },
};
</script>

<style></style>
