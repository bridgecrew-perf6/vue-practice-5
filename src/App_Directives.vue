<template>
  <div>
    <h1>Directives</h1>
    <h2 v-once>유저의 이름은 {{ userName }}</h2>
    <button @click="changeName">chage Name</button>
    <!--컴파일제외 v-pre-->
    <h2 v-pre>{{ userName }}</h2>
    <!--.포커스-->
    <input v-focus type="text" />
    highlight => <input type="text" v-highlight />
  </div>
</template>

<script>
export default {
  name: "App_Directives",
  data() {
    return {
      userName: "scalper",
    };
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    highlight: {
      mounted(el) {
        // {} 중괄호로 객체정보를 확인한다.
        console.log({ el });
        el.oninput = () => {
          el.style.background = "salmon";
          el.style.color = "#fff";
        };
      },
    },
  },
  methods: {
    changeName() {
      console.log("chageNa");
      this.userName = "code!!";
    },
  },
};
</script>
