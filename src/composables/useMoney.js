import { ref } from "vue";

function useMoney() {
  const totalMoney = ref(0);

  function addMoney(price) {
    totalMoney.value += price;
    console.log("in the JS AddMonye");
  }
  const totalNum = ref(0);
  const totalNum2 = ref(0);
  const totalNum3 = ref(0);
  const totalNum4 = ref(0);
  const totalNum5 = ref(0);
  const totalNum6 = ref(0);
  function addNum() {
    const random = require("random");

    totalNum.value = random.default.int(1, 45);
    totalNum2.value = random.default.int(1, 45);
    totalNum3.value = random.default.int(1, 45);
    totalNum4.value = random.default.int(1, 45);
    totalNum5.value = random.default.int(1, 45);
    totalNum6.value = random.default.int(1, 45);
    console.log("in the JS addNum");
  }
  return {
    totalMoney,
    addMoney,
    totalNum,
    addNum,
    totalNum2,
    totalNum3,
    totalNum4,
    totalNum5,
    totalNum6,
  };
}

export default useMoney;
