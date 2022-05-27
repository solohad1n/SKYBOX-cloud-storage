<template>
  <section class="info">
    <div class="info-images">
      <img :src="infoImage1" alt="" />
      <img :src="infoImage2" alt="" />
    </div>
    <div class="info__row">
      <Item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script>
import infoImage1 from "@/assets/data-image1.svg";
import infoImage2 from "@/assets/data-image2.svg";
import infoIcon1 from "@/assets/data-icon1.svg";
import infoIcon2 from "@/assets/data-icon2.svg";
import Item from "./Item.vue";
export default {
  components: { Item },
  setup() {
    return {
      infoImage1,
      infoImage2,
      items: [
        {
          id: 1,
          imgUrl: infoIcon1,
          amount: "999.529.323.121",
          description: "Загружено файлов на сервис",
        },
        {
          id: 2,
          imgUrl: infoIcon2,
          amount: "235.764.784",
          description: "Зарегистрировано пользователей",
        },
      ],
    };
  },
};
</script>

<style>
.info-images {
  display: flex;
  justify-content: space-between;
}
.info__row{
  transform: translateY(-180px);
  display: flex;
  justify-content: center;
}
</style>