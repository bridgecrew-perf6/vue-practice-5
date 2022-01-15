<template>
  <div>
    <h1>Watchers</h1>
    <h2>current money :: {{ money }}</h2>
    <div>
      <button @click="money += 100">earn money</button>
      <button @click="money -= 100">spend money</button>
    </div>
    <h3>{{ receit }}</h3>
    <button @click="receit.food += 500">buy food</button>

    <hr />
    <input type="text" v-model="userName" />

    <h2>{{ userName }}</h2>
  </div>
</template>

<script>
export default {
  name: "App_Watch",
  data() {
    return {
      userName: "scal",
      money: 0,
      receit: {
        food: 3000,
        fee: 2000,
        fare: 1000,
      },
    };
  },
  watch: {
    userName: {
      handler(newValue) {
        console.log("newValue", newValue);
      },
      immediate: true,
    },
    // receit(newValue, oldValue) {
    //   console.log("영수증변화", newValue, oldValue);
    // },
    receit: {
      handler(newValue) {
        console.log("영수증변화", newValue);
      },
      deep: true,
    },
    money(newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue > 2000 && newValue > oldValue) {
        console.log("mission Complete");
      }
      if (oldValue < 1500 && newValue < oldValue) {
        console.log("save money");
      }
    },
  },
};
</script>
