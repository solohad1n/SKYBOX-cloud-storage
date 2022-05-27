<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__row">
        <Item class="footer__description" label="О нас" :items="description" />
        <Item class="footer__lisks" label="Ссылки" :items="links" />
        <Item class="footer__contacts" label="Контакты" :items="contacts" />
      </div>
      <span>Copyright © 2016 - 2021 - SkyBox - Online File Storage</span>
    </div>
  </footer>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: { Item },
  setup() {
    return {
      description: [
        "При использовании Сервисов SKYBOX Вы можете передавать, хранить и/или делиться определенными данными, информацией, файлами и т. д. (все вместе «Данные Сервиса»). Во избежание сомнений, Вы сохраняете полное право собственности на Ваши Сервисные данные. SKYBOX сообщает, что вы или любой другой пользователь при использовании Сервиса. SKYBOX соглашается с тем, что настоящие Условия не предоставляют",
      ],
      links: [
        "Цены",
        "Контакты",
        "Поитика возврата",
        "Политика конфиденциальности",
        "Условия сервиса",
      ],
      contacts: [
        "Наш офис:",
        "Digitalgoals LTD",
        "Лапату 6, Строволос 27",
        "Лефкосия, Кипр",
        "Почта: skybox@gmail.com",
      ],
    };
  },
};
</script>

<style>
.footer {
  background-image: url("@/assets/footerimage.svg");
}
.footer__container {
  max-width: 1380px;
  margin: 0 auto;
}
.footer__row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #fff;
  padding-bottom: 30px;
  margin-bottom: 45px;
}
.footer span {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
}
@media (max-width: 414px) {
  .footer__lisks {
    display: none;
  }
  .footer__description {
    display: none;
  }
  .footer__row {
    justify-content: center;
  }
  .footer__row span {
    text-align: center;
  }
}
@media (max-width: 768px) {
  .footer__lisks {
    display: none;
  }
  .footer__description {
    display: none;
  }
  .footer__row {
    justify-content: center;
  }
  .footer__row span {
    text-align: center;
  }
}
@media (max-width: 820px) {
  .footer__lisks {
    display: none;
  }
  .footer__description {
    display: none;
  }
  .footer__row {
    justify-content: center;
  }
  .footer__row span {
    text-align: center;
  }
}
@media (max-width: 1024px) {
  .footer__lisks {
    display: none;
  }
  .footer__description {
    display: none;
  }
  .footer__row {
    justify-content: center;
  }
  .footer__row span {
    text-align: center;
  }
  
}
</style>