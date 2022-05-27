<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <h1 class="title">{{ title }}</h1>
  <h5>онлайн-хранилище</h5>
</template>

<style scoped>
.title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  text-align: center;
  line-height: 70px;
  letter-spacing: 0.405em;
  text-transform: uppercase;
  color: #3b668d;
}
h5 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 150%;
  letter-spacing: 0.905em;
  text-transform: uppercase;
  color: #3b668d;
  text-align: center;
  margin-bottom: 45px;
}
</style>