<template>
  <div>
    <h2 v-bind="$attrs">Hello User!! {{ username }}</h2>
    <h3>오늘이 {{ numberOfVisit }}번째 방문입니다</h3>
    <h3>사이트이름은 {{ siteInfo.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "Greeting User",
  inheritAttrs: true,
  props: {
    username: {
      type: String,
      default: "lkkkk",
    },
    numberOfVisit: {
      type: Number,
      default: 0,
    },
    siteInfo: {
      type: Object,
      default: () => {
        return { name: "-", teacher: "-" };
      },
    },
  },
};
</script>

<style scoped></style>
