<script setup>
import Header from "../components/Header/Header.vue";
import Button from "../components/Buttons/Button.vue";
import GroupImg from "@/assets/Group.svg";
</script>

<template>
  <section class="hero">
    <div class="container">
      <Header />
      <img class="GroupImg" :src="GroupImg" alt="" />
      <h1 class="hero__title">ДЛЯ СЕБЯ И ДЛЯ БИЗНЕСА</h1>
      <h5>онлайн-хранилище</h5>
      <h4>ХРАНИТЕ И УПРАВЛЯЙТЕ ВСЕМИ ВАШИМИ Файлами!</h4>
      <p>
        Загружайте сразу несколько файлов и навсегда храните их на этом сайте.
        Если вы используете FireFox или Chrome, вы можете просто перетащить
        файлы, чтобы начать загрузку.
      </p>
      <Button className="btn-gradient hero__button" text="Попробовать сейчас" />
    </div>
  </section>
</template>

<style scoped>
.GroupImg {
  display: none;
}
.hero {
  background-image: url("@/assets/heroimage.svg");
  background-size: cover;
  height: 120vh;
}
.container {
  max-width: 1220px;
  margin: 0 auto;
}
.hero__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 70px;
  color: #3b668d;
  width: 40%;
}
.hero h4 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  width: 40%;
  font-size: 23px;
  line-height: 156%;
  margin-top: 32px;
  text-transform: uppercase;
  color: #3b668d;
}
.hero h5 {
  margin-top: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 150%;
  letter-spacing: 0.905em;
  text-transform: uppercase;
  color: #3b668d;
  position: relative;
  padding-bottom: 28px;
}
.hero h5::after {
  background: #3b668d;
  position: absolute;
  content: " ";
  bottom: 0;
  left: 0;
  height: 2px;
  width: 500px;
}
.hero p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 156%;
  width: 40%;
  letter-spacing: 0.075em;
  color: #2b4964;
  margin-top: 12px;
}
.hero__button {
  margin-top: 30px;
  padding: 16px 50px;
}

@media (max-width: 414px) {
  .hero {
    background-image: none;
    background-image: url("@/assets/BG.svg");
  }

  .GroupImg {
    display: block;
  }
  .hero__title {
    width: 100%;
    margin: 50px 0 0 0;
    text-align: center;
    font-size: 55px;
  }
  .hero h5 {
    align-items: center;
  }
  .hero h5::after {
    display: none;
  }
  .hero h4 {
    width: 100px;
    margin: 0;
    padding: 0;
  }
  .hero p {
    width: 100%;
    letter-spacing: 0;
    margin-top: 0px;
  }
}
@media (max-width: 768px) {
  .hero {
    background-image: none;
  }
  .hero {
    background-image: url("@/assets/BG.svg");
  }
  .GroupImg {
    display: block;
    z-index: 1;
  }
  .hero__title {
    width: 100%;
    text-align: center;
    font-size: 55px;
  }
  .hero h5 {
    align-items: center;
    padding: 0;
    margin: 0;
  }
  .hero h5::after {
    display: none;
  }
  .hero h4 {
    width: 100%;
    margin-top: 0px;
    margin: 0 0 30px 0;
  }
  .hero p {
    width: 100%;
    letter-spacing: 0;
    margin-top: 0px;
    text-align: center;
  }
}
@media (max-width: 820px) {
  .hero {
    background-image: none;
  }
  .hero {
    background-image: url("@/assets/BG.svg");
  }
  .GroupImg {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .hero__title {
    width: 100%;
    text-align: center;
    font-size: 55px;
  }
  .hero h5 {
    align-items: center;
  }
  .hero h5::after {
    display: none;
  }
  .hero h4 {
    width: 100%;
    margin-top: 0px;
    margin: 0 0 30px 0;
  }
  .hero p {
    width: 100%;
    letter-spacing: 0;
    margin-top: 0px;
    text-align: center;
  }
}
@media (max-width: 1024px) {
  .container {
    max-width: 950px;
    margin: 0 auto;
  }
  .hero {
    background-image: none;
    height: 1600px;
  }
  .hero {
    background-image: url("@/assets/BG.svg");
  }
  .GroupImg {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .hero__title {
    width: 100%;
    text-align: center;
    font-size: 55px;
  }
  .hero h5 {
    align-items: center;
  }
  .hero h5::after {
    display: none;
  }
  .hero h4 {
    width: 100%;
    margin-top: 0px;
    margin: 0 0 30px 0;
  }
  .hero p {
    width: 100%;
    letter-spacing: 0;
    margin-top: 0px;
    text-align: center;
  }
  .hero h5[data-v-71e64bae] {
    text-align: center;
  }
  .hero h4[data-v-71e64bae] {
    text-align: center;
  }
  .hero__button[data-v-71e64bae] {
    width: 100%;
  }
  .hero p[data-v-71e64bae] {
    margin: 0 0 150px 0;
  }
}
</style>