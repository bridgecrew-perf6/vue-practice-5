<template>
  <div>
    <h1>hello vue3</h1>
    <h2>{{ add(75) }}</h2>
    <h2>{{ age + 10 }}</h2>
    <h2>동갑이 열명있다면 나의총합은 {{ gettotalScore(age, 20) }}</h2>
    <h2>{{ name }}</h2>
    <button v-on:click.right="changeName">changeName</button>
    <button
      v-on:mouseover="name = 'over Scaloper'"
      v-on:mouseleave="name = 'leave scalper'"
    >
      changeName
    </button>
    <a v-on:click.prevent="movePage" href="https://naver.com">123</a>
    <h2>{{ number }}</h2>
    <button v-on:click="increment($event)">숫자 1증가</button>
    <button v-on:click="decrement(2)">숫자 2감소</button>
    <button v-on:click="increment(3)">숫자 3증가</button>
    <button v-on:click="decrement(4)">숫자 4감소</button>
    <button v-on:click="increment(5)">숫자 5증가</button>
  </div>
</template>

<script>
export default {
  name: "App_Method",
  data() {
    return {
      age: 30,
      name: "scaler",
      number: 0,
    };
  },
  methods: {
    increment(e, num) {
      console.log(e);
      this.number += num;
    },
    decrement(num) {
      this.number -= num;
    },
    movePage() {
      const check = confirm("페이지이동?");
      if (check) {
        console.log("이동");
      } else {
        console.log("안함");
      }
    },
    changeName() {
      this.name = "code scalper";
    },
    add(num) {
      console.log(this);
      return this.age + num;
    },
    multiply(num1, num2 = 10) {
      return num1 * num2;
    },
    gettotalScore(num) {
      return this.multiply(num, num);
    },
    // add: (num) => {
    //   console.log(this);
    //   return this.age + num;
    // },
  },
};
</script>
