<template>
  <div>
    <!-- <h2>{{ username }}</h2>
    <h2>{{ age }}</h2> -->

    <!-- <h2>{{ username }}</h2>
    <button @click="changeName">ChagneUserName</button>
    <h2>제품명 : {{ name }}, 가격 : {{ price }}</h2>
    <button @click="changeProduct">changeProduct</button> -->
    <div>
      <input type="text" v-model="username" />
      <hr />
      price <input type="text" v-model="price" /> amout
      <input type="text" v-model="amount" />
      <h3>Total Price {{ totalPrice }}</h3>
    </div>
    <div>
      first <input type="text" v-model="home.city" /> last
      <input type="text" v-model="last" />
      <h3>Full name :: {{ fullName }}</h3>
    </div>
    <hr />

    <div></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch } from "vue";
//import { ref, reactive } from "vue";
export default {
  name: "TestComposition",
  setup() {
    const username = ref("scalper Watch composition");
    const price = ref(5000);
    const amount = ref(1);
    //console.log(priece);
    const totalPrice = computed(() => {
      return price.value * amount.value;
    });
    watch(price, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    const state = reactive({
      first: "Code",
      last: "Scalper",
      home: {
        city: "seoul",
        type: "Apartment",
      },
    });
    watch(
      () => {
        return state.first;
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );
    watch(
      () => {
        return { ...state.home };
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: true }
    );
    const fullName = computed(function () {
      return `${state.first} + ${state.last}`;
    });

    return {
      username,
      price,
      amount,
      totalPrice,
      ...toRefs(state),
      fullName,
    };
  },
  //   data() {
  //     return {
  //       price: 5000,
  //       amount: 1,
  //     };
  //   },
  computed: {
    // totalPrice() {
    //   return this.price * this.amount;
    // },
  },
  // composition =====================================================
  //   setup() {
  //     const username = ref("scalper12");
  //     const state = reactive({
  //       name: "TV",
  //       price: 100,
  //     });
  //     function changeName() {
  //       username.value = "Messi";
  //     }
  //     function changeProduct() {
  //       state.name = "세탁기";
  //       state.price = "5000";
  //     }
  //     return {
  //       username,
  //       changeName,
  //       changeProduct,
  //       ...toRefs(state),
  //     };
  //   },
};
</script>

<style></style>
