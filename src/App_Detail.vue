<template>
  <div>
    <!-- 슬롯 테스트 =============================================-->
    <CardView>
      <template v-slot:header>
        <h3>random Image</h3>
      </template>
      <template v-slot:body>
        <img src="https://placeimg.com/200/100/any" alt="randomimage" />
      </template>
      <template v-slot:footer>
        <small>thank you</small>
      </template>
    </CardView>
    <CardView> Hello Slots!!!! </CardView>
    <CardView
      ><img src="https://placeimg.com/100/50/any" alt="random"
    /></CardView>
    <CardView>
      <ul>
        <li>짬뽕</li>
        <li>짜장</li>
      </ul>
    </CardView>
    <CardView></CardView>
    <!-- 컴포넌트5================================================ -->
    <button @click="activeTab = 'Menu1'">menu1</button>
    <button @click="activeTab = 'Menu2'">menu2</button>
    <button @click="activeTab = 'Menu3'">menu3</button>
    <Menu1 v-if="activeTab === 'Menu1'" />
    <Menu2 v-if="activeTab === 'Menu2'" />
    <Menu3 v-if="activeTab === 'Menu3'" />
    <hr />
    <!-- 값유지할때필요 -->
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
    <hr />
    <h2>Detail World</h2>
    <CompLevel1 :username="username" />
    <button @click="displayDetail = true">show detail</button>
    <DetailView
      v-if="displayDetail"
      @closeDetail="close"
      @sendData="showData"
    />
  </div>
</template>

<script>
import CardView from "./components/slot/CardView.vue";
import Menu1 from "./components/tabItems/Menu1.vue";
import Menu2 from "./components/tabItems/Menu2.vue";
import Menu3 from "./components/tabItems/Menu3.vue";
import CompLevel1 from "./components/provide-inject/CompLevel1.vue";
import DetailView from "./components/DetailView.vue";
export default {
  name: "App_Detail",
  provide() {
    return {
      name: this.username,
    };
  },
  components: { Menu1, Menu2, Menu3, DetailView, CompLevel1, CardView },
  methods: {
    close() {
      this.displayDetail = false;
    },
    showData(data) {
      console.log(data, "data 받음");
    },
  },
  data() {
    return {
      username: "comp3Name",
      displayDetail: false,
      activeTab: "Menu1",
    };
  },
};
</script>

<style></style>
