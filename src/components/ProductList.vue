<template>
  <div>
    <ul>
      <!-- //<li v-for="product in products" :key="product.id">{{ product }}</li>-->
      <!-- {{products}} -->
    </ul>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "Product-list",
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style></style>
