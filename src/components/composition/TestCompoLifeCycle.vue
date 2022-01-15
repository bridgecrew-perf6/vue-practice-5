<template>
  <h2>Hello LifeCycle2</h2>
  <input type="text" v-model="username" ref="inputRef" />
  <hr />
  <ChildCompoLifeCycle
    firstname="Code"
    lastname="Scalper"
    @sendParent="sendParent"
  />
  <hr />
  <FeeStatus />
  <hr />
  <ProductStatus />
  <ProductStatus_composables />
  <hr />
  <SavingStatus />
  <hr />
</template>

<script>
//import { ref, onMounted } from "vue";

import ProductStatus_composables from "../mixin/ProductPace_composable.vue";
import ChildCompoLifeCycle from "./ChildCompoLifeCycle.vue";
import FeeStatus from "../mixin/FeeStatus.vue";
import ProductStatus from "../mixin/ProductPace.vue";
import SavingStatus from "../mixin/SavingStatus.vue";
export default {
  name: "TestCompoCycle",
  components: {
    ChildCompoLifeCycle,
    FeeStatus,
    ProductStatus,
    SavingStatus,
    ProductStatus_composables,
  },
  //   setup() {
  //     const inputRef = ref(null);
  //     const username = ref("scalper");
  //     onMounted(() => {
  //       console.log(inputRef.value.focus());
  //       console.log("onMount");
  //     });
  //     return {
  //       username,
  //       inputRef,
  //     };
  //   },
  methods: {
    sendParent() {
      console.log("test sendParent");
    },
  },
};
</script>

<style></style>
