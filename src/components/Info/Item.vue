<template>
  <div class="info-item">
    <img :src="item.imgUrl" alt="" />
    <div class="info-item__text">
      <h3>{{ item.amount }}</h3>
      <span>{{ item.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
.info-item {
  display: flex;
  align-items: center;
  margin-right: 100px;
}
.info-item__text {
  margin-left: 18px;
}
.info-item__text h3 {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 30px;
  line-height: 47px;
  color: #425b8c;
}
.info-item__text span {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #718dc2;
}
</style>