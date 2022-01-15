<template>
  <h2>Hello Components 3</h2>
  <h3>passed Data from App {{ username }}</h3>
  <h3>inject Data from App {{ name }}</h3>
</template>

<script>
export default {
  name: "CompLeve3",
  inject: ["name"],
  props: {
    username: {
      type: String,
      default: "Level3 defualt Name",
    },
  },
};
</script>

<style></style>
