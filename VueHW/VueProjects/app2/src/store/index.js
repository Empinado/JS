import { createStore } from "vuex";

export default createStore({
  // массив объектов где храняться данные
  state: {
    count: 0,
    cart: [],
    data: [],
  },
  // Функции, которые возвращают данные
  getters: {
    //геттер для возвращения корзины товаров
    cartItem(state) {
      return state.cart;
    },
    //количество товаров в корзине
    totalItems(state) {
      return state.cart.length;
    },
    //Возвращаем полную стоимость товаров в корзине
    //Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
    totalPrice(state) {
      return state.cart.reduce((acc, item) => acc + item.price, 0);
    },
  },
  //Ф-ии, которые изменяют данные из state
  mutations: {
    ADD(state) {
      state.count++;
    },
    MINUS(state) {
      state.count--;
    },
    ADD_ITEM(state, item) {
      state.cart.push(item);
    },
    SET_DATA(state, fetchdata) {
      //переопределение пустого массива на массив с данными
      //мы будем передавать в массив в state, другой массив извне
      state.data = fetchdata;
    },
  },
  // действия, которые используют мутации и данные одновременно
  actions: {
    // context это сущность, которой обладают actions.В ней содержится ряд методов
    //Мутация SET_DATA и
    fetchData(context) {
      //Иметируем информацию, получаемую с сервера
      setTimeout(() => {
        const dataFormServer = ["data1", "data2", "data3"];
        // в мутации SET_DATA мы как раз должны принимать данные
        // в нашем случае это и есть масив dataFromServer
        context.commit("SET_DATA", dataFormServer);
      }, 3000);
    },
  },
  //деление на компоненты
  modules: {},
});
