<template>
  <div>
    <h2>1122</h2>
    <!-- <ul>
      <li v-for="product in products" :key="product.id">{{ product }}</li>
    </ul> -->
    <ProductList :products="products" />
    <GreetingUser id="greeting" :username="username" />
    <GreetingUser username="1212" />
    <GreetingUser username="영어이름" />
    <GreetingUser
      :username="username"
      :numberOfVisit="numberOfVisit"
      :siteInfo="siteInfo"
    />
  </div>
  <button @click="chageName()">changeName</button>
</template>

<script>
import GreetingUser from "./components/GreetingUser.vue";
import ProductList from "./components/ProductList.vue";
export default {
  name: "App_Components",
  components: {
    GreetingUser,
    ProductList,
  },
  methods: {
    chageName() {
      this.username = "DDOCHI";
    },
  },
  data() {
    return {
      products: [
        { id: 0, name: "TV", price: 500000, company: "LG" },
        { id: 1, name: "전자렌지", price: 300000, company: "삼성" },
        { id: 2, name: "가스오븐", price: 200000, company: "한화" },
        { id: 3, name: "냉장고", price: 50000, company: "대우" },
        { id: 4, name: "에이컨", price: 1000000, company: "해태" },
      ],
      username: "scalper",
      numberOfVisit: undefined,
      siteInfo: {
        name: "vue practice",
        teacher: "scalper",
        subject: "frontend",
      },
    };
  },
};
</script>
