<template>
  <div>
    <h2>hello mixin</h2>
    <ProductStatus />
    <FeeStatus />
    <SavingStatus />
  </div>
</template>

<script>
import ProductStatus from "./components/mixin/ProductPace.vue";
import FeeStatus from "./components/mixin/FeeStatus.vue";
import SavingStatus from "./components/mixin/SavingStatus.vue";
export default {
  name: "App_Mixin",
  components: { ProductStatus, FeeStatus, SavingStatus },
  data() {
    return {};
  },
};
</script>

<style></style>
