<template>
  <section class="features">
    <div class="features__wrapper">
      <img class="features__img" :src="featureImg" alt="" />
      <div class="feature-items">
        <Item v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>

<script>
import featureImg from "@/assets/featureimage.svg";
import Item from "./Item.vue";
import featureIcon1 from "@/assets/feature-icon1.svg";
import featureIcon2 from "@/assets/feature-icon2.svg";
import featureIcon3 from "@/assets/feature-icon3.svg";
import featureIcon4 from "@/assets/feature-icon4.svg";
export default {
  components: { Item },
  setup() {
    return {
      featureImg,
      items: [
        {
          id: 1,
          imgUrl: featureIcon1,
          title: "БЕЗОПАСНО И НАДЕЖНО",
          description:
            "Безопасное хранение и резервное копирование всех ваших важных файлов. От семейных фотографий и видео до важных документов — вы можете положиться на нас в надежном и надежном хранении всех ваших медиафайлов.",
        },
        {
          id: 2,
          imgUrl: featureIcon2,
          title: "Доступ из любого места",
          description:
            "С легкостью получайте доступ к своим файлам из любого места с помощью настольных приложений для Windows и Mac и мобильных приложений для iPhone, iPad, Android и Интернета.",
        },
        {
          id: 3,
          imgUrl: featureIcon3,
          title: "ХРАНИТЕ И УПРАВЛЯЙТЕ ВСЕМИ ВАШИМИ ФАЙЛАМИ!",
          description:
            "Загружайте сразу несколько файлов и навсегда храните их на этом сайте. Если вы используете FireFox или Chrome, вы можете просто перетащить файлы, чтобы начать загрузку.",
        },
        {
          id: 4,
          imgUrl: featureIcon4,
          title: "Любая точка земного шара",
          description:
            "Высокая скорость из любого места с доступом в интернет! Гигабитная сеть и высокопроизводительный сервер!",
        },
      ],
    };
  },
};
</script>

<style>

.features__wrapper {
  display: flex;
  align-items: center;
  max-width: 1420px;
  margin: 0 auto;
}
.features__img {
  width: 850px;
  height: 850px;
}
@media (max-width: 414px) {
  .features__img {
    display: none;
    background-image: url("@/assets/Group.svg");
  }
  .features-item__title {
    color: black;
  }
  .feature-items img {
    display: none;
  }
}
@media (max-width: 768px) {
  .features__img {
    display: none;
    background-image: url("@/assets/Group.svg");
  }
  .features-item__title {
    color: black;
  }
  .feature-items img {
    display: none;
  }
  .features-item__description {
    text-align: center;
  }
}
@media (max-width: 820px) {
  .features__img {
    display: none;
    background-image: url("@/assets/Group.svg");
  }
  .features-item__title {
    color: black;
  }
  .feature-items img {
    display: none;
  }
  .features-item__description {
    text-align: center;
  }
}
</style>