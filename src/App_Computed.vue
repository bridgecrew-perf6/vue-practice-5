<template>
  <div>
    <h1>Computed</h1>
    <h2>{{ address }}</h2>
    <h2>내가받은점수의합 {{ userName }}</h2>
    <!--값이 캐쉬가 되기때문에 편함 -->
    <!--메소드는 계산을 항시 대기  -->
    <h2>내가받은점수의합(computed) {{ totalScore }}</h2>
    <h2>내가받은점수의합(method) {{ getTotalScore() }}</h2>
    영어점수<input type="number" v-model="grade.eng" />
    <input type="text" v-model="studentname" />
  </div>
</template>

<script>
export default {
  name: "App_Computed",
  data() {
    return {
      userName: "scalper",
      address1: "성남시",
      address2: "분당구",
      address3: "자로",
      grade: {
        math: 70,
        kor: 90,
        eng: 50,
        sci: 55,
      },
      studentname: "",
    };
  },
  methods: {
    getTotalScore() {
      console.log("method ing");
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
  computed: {
    address() {
      return `${this.address1} - ${this.address2} - ${this.address3}`;
    },
    totalScore() {
      console.log("computed ing");
      const { math, kor, eng, sci } = this.grade;
      return math + kor + eng + sci;
    },
  },
};
</script>
