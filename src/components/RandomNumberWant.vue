<template>
  <div>
    <h2>welcome to the Random World</h2>
    <button @click="getRandom()">숫자얍</button>
    <h3>{{ tot }}</h3>
  </div>
</template>

<script>
const random = require("random");
//random.default.int(1, 45)
export default {
  name: "randomNumberWant",
  data() {
    return {
      currentNumber: 0,
      number1: 0,
      //tot = "",
    };
  },
  methods: {
    getRandom() {
      const tot =
        random.default.int(1, 45) +
        " " +
        random.default.int(1, 45) +
        " " +
        random.default.int(1, 45) +
        " " +
        random.default.int(1, 45) +
        " " +
        random.default.int(1, 45) +
        " " +
        random.default.int(1, 45);
      //console.log(random.default.int(1, 45));
      console.log(tot);

      return this.tot;
    },
  },
};
</script>

<style></style>
