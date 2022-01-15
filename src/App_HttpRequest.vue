<template>
  <div>
    <h2>Hello Life Cycle</h2>
    <ParentComp />
    <h2>hello HTTP world</h2>
    <TodoList />
  </div>
</template>

<script>
import ParentComp from "./components/lifecycle/ParentComp.vue";
import TodoList from "./components/http/TodoList.vue";
export default {
  components: { TodoList, ParentComp },
};
</script>

<style></style>
