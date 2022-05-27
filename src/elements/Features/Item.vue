<template>
  <div class="features-item">
    <img :src="item.imgUrl" alt="" />
    <div class="features-item__text">
      <h3 class="features-item__title">{{ item.title }}</h3>
      <p class="features-item__description">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
.features-item {
  display: flex;
  margin-bottom: 40px;
}
.features-item img {
  width: 90px;
  height: 90px;
}
.features-item__text{
    margin-left: 30px;
}
.features-item__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 40px;
  color: #3b668d;
  text-transform: uppercase;
}
.features-item__description {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #2b4964;
}
</style>