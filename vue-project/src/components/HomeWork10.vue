<template>
  <div>
    <div v-for="prod in products" :key="prod.id" class="product">
      <h2>{{ prod.name }}</h2>
      <p>{{ formattedPrice(prod.price) }}</p>
      <p v-if="prod.available">Available</p>
      <p v-else>Out of stock</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Sample Product 1",
          price: 99.99,
          available: true,
        },
        {
          id: 2,
          name: "Sample Product 2",
          price: 49.99,
          available: false,
        },
        {
          id: 3,
          name: "Sample Product 3",
          price: 129.99,
          available: true,
        },
      ],
    };
  },
  computed: {
    formattedPrice() {
      return (price) => {
        return "$" + price.toFixed(2);
      };
    },
  },
};
</script>

<style lang=""></style>
