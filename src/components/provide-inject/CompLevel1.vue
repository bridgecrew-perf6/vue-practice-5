<template>
  <h2>Hello Components 1</h2>
  <CompLevel2 :username="username" />
</template>

<script>
import CompLevel2 from "./CompLevel2.vue";
export default {
  name: "comp1",
  props: {
    username: {
      type: String,
      default: "Level1 defualt Name",
    },
  },
  components: {
    CompLevel2,
  },
};
</script>

<style></style>
