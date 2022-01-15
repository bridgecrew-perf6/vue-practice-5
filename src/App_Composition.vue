<template>
  <div>
    <h2>hello Composition Vue</h2>
    <TestComponent />
    <!-- <RandomNumberWant /> -->
    <button @click="getNumber()">1234</button>
  </div>
</template>

<script>
import TestComponent from "./components/composition/TestComponent.vue";
//import RandomNumberWant from "./components/RandomNumberWant.vue";
export default {
  name: "App_Composition",
  components: {
    TestComponent,
    //RandomNumberWant
  },
  data() {
    return {};
  },
  methods: {
    getNumber() {
      //const random = require("random");
      //console.log(random.int(1, 45));
      //console.log(random.Int(4, 5));
    },
  },
};
</script>

<style></style>
