<template>
  <h2>Todo List</h2>
  <button @click="getTodoList">Request Todo</button>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">{{ todo.title }}</li>
  </ul>

  <div>
    <label for="todo">할일</label>
    <input type="text" v-model="todoItem.title" />
    <button @click="createTodo"></button>
  </div>
  <!-- <p v-if="errorMessage">11{{ errorMessage }}</p> -->
</template>

<script>
import axios from "axios";

export default {
  name: "TodoList",
  data() {
    return {
      todoList: [],
      todoItem: {
        title: "",
        completed: false,
      },
    };
  },
  methods: {
    // createTodo() {
    //   const url = "https://jsonplaceholder.typicode.com/todos";
    //   axios
    //     .post(url, this.todoItem)
    //     .then((res) => console.log(res))
    //     .catch((e) => console.log(e));
    // },
    getTodoList() {
      const url = "https://jsonplaceholder.typicode.com/todos";
      axios
        .get(url)
        .then((res) => (this.todoList = res.data))
        .catch((e) => {
          console.log(e);
          this.errorMessage = "에러발생";
        });
    },
  },
};
</script>

<style></style>
