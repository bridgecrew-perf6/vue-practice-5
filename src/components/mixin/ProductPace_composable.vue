<template>
  <div>
    <h2>전체금액 :{{ totalMoney }}</h2>
    <h2>
      숫자 :{{ totalNum }},{{ totalNum2 }},{{ totalNum3 }},{{ totalNum4 }},{{
        totalNum5
      }},{{ totalNum6 }}
    </h2>
    <div>
      <button @click="addMoney(100)">100</button>
      <button @click="addMoney(200)">200</button>
      <button @click="addMoney(300)">300</button>
      <button @click="addMoney(400)">400</button>
      <button @click="addNum(400)">로또</button>
    </div>
  </div>
</template>

<script>
import useMoney from "../../composables/useMoney.js";
export default {
  name: "productStatus",
  setup() {
    const {
      addMoney,
      totalMoney,
      addNum,
      totalNum,
      totalNum2,
      totalNum3,
      totalNum4,
      totalNum5,
      totalNum6,
    } = useMoney();

    return {
      addMoney,
      totalMoney,
      addNum,
      totalNum,
      totalNum2,
      totalNum3,
      totalNum4,
      totalNum5,
      totalNum6,
    };
  },
};
</script>

<style></style>
