<template>
  <div>
    <h2>Child Component</h2>
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  name: "childComp",
  methods: {
    sayHello() {
      console.log("say hello");
    },
  },
  data() {
    return {
      username: "",
    };
  },
  beforeCreate() {
    console.log("child before create");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child before Mounte");
  },
  Mounted() {
    console.log("child Mounted");
  },
  beforeUpdate() {
    console.log("child before Update");
  },
  Updated() {
    console.log("child Updated");
  },
  beforeUnmount() {
    console.log("child before Unmounting");
  },
  Unmounted() {
    console.log("child Unmounted");
  },
};
</script>

<style></style>
