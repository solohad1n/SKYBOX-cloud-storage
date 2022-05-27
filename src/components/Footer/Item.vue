<template>
  <div class="footer-item">
    <h2>{{ label }}</h2>
    <ul class="footer-list">
      <li class="footer-list__item" v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["label", "items"],
};
</script>

<style>
.footer-item h2 {
  padding-top: 350px;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 54px;
  color: #ffffff;
  margin-bottom: 30px;
}
.footer-list li {
  cursor: pointer;
  margin-bottom: 18px;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  max-width: 418px;
}
</style>