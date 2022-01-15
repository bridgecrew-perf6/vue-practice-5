<template>
  <div>
    <input v-model="nickname" ref="inputRef" />
    <button @click="consoleRef">console ref</button>
    <hr />

    <!-- creating before created
    mounting  before ed
    updating  before ed
    unmounting before ed
    misc -->
    <h2>Parent Comp</h2>
    <ChildComp v-if="showChild" ref="childComp" />
    <button @click="showChild = false">unmount child</button>
  </div>
</template>

<script>
import ChildComp from "./ChildComp.vue";
export default {
  name: "parentComp",
  methods: {
    consoleRef() {
      // this.$refs.inputRef.focus();
      // this.$refs.inputRef.style.border = "1px solid red";
      console.log(this.$refs.inputRef, "input ref");
      console.log(this.$refs.childComp);
      this.$refs.childComp.sayHello();
    },
  },
  data() {
    return {
      nickname: "",
      showChild: true,
    };
  },
  components: { ChildComp },
  beforeCreate() {
    console.log("parent before create");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parent before Mounte");
  },
  Mounted() {
    console.log("parent Mounted");
  },
  beforeUpdate() {
    console.log("parent before Update");
  },
  Updated() {
    console.log("parent Updated");
  },
  beforeUnmount() {
    console.log("parent before Unmounting");
  },
  Unmounted() {
    console.log("parent Unmounted");
  },
};
</script>
<style></style>
