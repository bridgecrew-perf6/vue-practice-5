<template>
  <h2>Hello Components 2</h2>
  <CompLevel3 :username="username" />
</template>

<script>
import CompLevel3 from "./CompLevel3.vue";
export default {
  name: "comp2",
  props: {
    username: {
      type: String,
      default: "Level2 defualt Name",
    },
  },
  components: {
    CompLevel3,
  },
};
</script>

<style></style>
