<template>
  <div>
    <h1>hello vue!! {{ user.name }}</h1>
    <h1 v-once v-text="user.name"></h1>
    <h1 v-text="user.name"></h1>
    <input type="text" v-model="user.name" />

    <h2 v-if="showName">My name is {{ user.name }}</h2>
    <h2 v-if="user.age > 20">당신은 성인</h2>
    <h2 v-else-if="user.age > 14 && user.age < 20">당신은 청소년</h2>
    <h2 v-else>이름을 보여줄수 없음</h2>
    <button onclick="showName=false">버튼</button>

    <h2 v-if="!showName">{{ user.name }} IF</h2>
    <h2 v-show="!showName">{{ user.name }} Show</h2>

    <ul>
      <template v-if="question === 'frontend'">
        <li>HTML 은 재미있나요?</li>
        <li>CSS 은 재미있나요?</li>
        <li>javascript 은 재미있나요?</li>
      </template>
      <template v-else>
        <li>java 은 재미있나요?</li>
        <li>python 은 재미있나요?</li>
        <li>c# 은 재미있나요?</li>
      </template>
    </ul>
  </div>
  <div>
    {{ fruits }}
    <ul>
      <li v-for="(fruit, index) of fruits" :key="fruit">
        {{ index + 1 + 3 }} {{ fruit }}
      </li>
      <h2 v-for="(value, key, index) in user" :key="key">
        {{ index }} : {{ value }} 는 {{ key }}
      </h2>
    </ul>
  </div>

  <div v-for="(animal, animalIndex) in animals" :key="animalIndex">
    <h2>Animal ===> {{ animal.name }}</h2>
    <h3>food</h3>
    <ul>
      <li v-for="(food, foodIndex) in animal.food" :key="foodIndex">
        {{ food }}
      </li>
    </ul>
  </div>

  <div>
    <li
      v-for="(city, index) in cities.filter((c) => {
        return c.province === '경상도';
      })"
      :key="index"
    >
      {{ city.name }} 는 {{ city.province }}
    </li>
    <li v-for="(city, index) in cities" :key="index">
      <span v-if="city.province === '경상도'">{{ city.name }}</span>
    </li>

    <template v-for="(city, index) in cities" :key="index">
      <li v-if="city.province === '경상도'">{{ city.name }}</li>
    </template>
  </div>
</template>

<script>
export default {
  name: "App_Condition",
  data() {
    return {
      cities: [
        { name: "서울", province: "경기도" },
        { name: "대전", province: "충청도" },
        { name: "대구", province: "경상도" },
        { name: "부산", province: "경상도" },
        { name: "광주", province: "전라도" },
        { name: "인천", province: "경기도" },
      ],
      animals: [
        { name: "monkey", size: "medium", food: ["banana", "apple"] },
        { name: "lion", size: "big", food: ["deer", "cow"] },
        { name: "rat", size: "small", food: ["cheese", "rice"] },
      ],
      users: {
        name: "scalper",
        age: "100",
        job: "programmer",
      },
      fruits: [
        "banana",
        "strawberry",
        "apple",
        "melon",
        "banana",
        "strawberry",
        "apple",
        "melon",
      ],
      question: "back",
      showName: true,
      user: {
        name: "scal",
        age: 15,
        job: "programmer",
      },
    };
  },
};
</script>
