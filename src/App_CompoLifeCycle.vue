<template>
  <div>
    <RandomNumberWant />
    <hr />

    <h2>Compo LifeCycle</h2>
    <TestComponent />
  </div>
</template>

<script>
import RandomNumberWant from "./components/RandomNumberWant.vue";
import TestComponent from "./components/composition/TestCompoLifeCycle.vue";

export default {
  name: "App_CompoLifeCycle",
  components: { TestComponent, RandomNumberWant },
};
</script>

<style></style>
