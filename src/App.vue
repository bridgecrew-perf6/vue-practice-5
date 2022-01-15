<template>
  <div>
    <h1>hello {{ username }}</h1>
    <h1 v-text="username"></h1>
    <p>{{ year }}</p>
    <p>{{ user.job }}</p>
    <p>{{ user.age }}</p>
    <p v-html="button"></p>
    <p v-html="button2"></p>
    <h2 class="line-through">line0-through</h2>
    <h2 v-bind:class="textDecoration" class="text-red">line0-through</h2>

    <!-- CSS적용편  바인딩
      조건 ? 참일 : 아닐
    -->
    <h2 :class="isDone === true ? 'line-through' : 'highlight'">
      line0-through
    </h2>
    <h2
      :class="{
        highlight: isDone === false,
        'text-red': username === 'scal',
      }"
    >
      Object형태의 동적클래스
    </h2>
    <h2
      :class="[
        isDone === true ? 'line-through' : 'highlight',
        username === 'scal' ? 'text-red' : 'text-green',
      ]"
    >
      Array 형태의 동적 클래스부여
    </h2>
    <!--------------------------------------------->
    <!-- 스크립트적용 CSS-->
    <h1 id="title">hello title</h1>
    <h1 :id="dynamicId">hello v-bind</h1>
    <a :href="url">naver</a>
    <img :src="image.src" :alt="image.alt" />
    <input :type="inputType" />
    <p v-bind:style="pStyle">hello</p>
    <p v-bind:style="{ color: 'red', fontSize: '50px' }">hello 카멜케이스</p>
    <!--=============================카멜케이스  font-size -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      basicStyle: {},
      titleStyle: {
        fontWeight: "bold",
        "font-size": "50px",
        border: "1px solid red",
      },
      basicSize: 100,
      pStyle: "color: red; font-size: 36px",
      inputType: "color",
      image: {
        src: "https://placeimg.com/100/100/any",
        alt: "random image",
      },
      url: "https://www.naver.com",
      dynamicId: "content",
      isDone: true,
      textDecoration: "line-through",
      username: "scal2",
      year: 2021,
      user: {
        name: "scal",
        job: "programmer",
        age: 100,
      },
      button: "<button>click</button>",
      button2: `<button onclick='document.body.style="background: red; transform: rotate(180deg);"'>click</button>`,
    };
  },
};
</script>

<style>
#content {
  color: blue;
  background: pink;
}
#title {
  color: red;
  background: yellow;
}
.highlight {
  font-weight: bold;
  background: pink;
}
.text-green {
  color: green;
}
.text-red {
  color: red;
}
.line-through {
  text-decoration: line-through;
}
</style>
