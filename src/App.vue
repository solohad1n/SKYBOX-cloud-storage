<script setup>
</script>

<template>
  <RouterView />
</template>

<style>
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
@media (max-width: 414px) {
  .about-us {
    display: none;
  }
  .links {
    display: none;
  }
  .contacts {
    padding: 35px;
  }

  .container {
    max-width: 350px;
    margin: 0 auto;
  }
  .info-images {
    display: none;
  }
  .hero h5 {
    letter-spacing: 0;
    text-align: center;
    font-size: 0px;
  }
  .hero {
    height: 240vh;
  }
  .info__row {
    transform: translateY(0px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero h5 {
    font-size: 20px;
  }
  .btn-gradient {
    width: 100%;
  }
  .info-item {
    margin: 0;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  .btn-white {
    display: none;
  }
  .hero h4 {
    padding: 0;
    text-align: center;
  }
  .features__wrapper {
    height: 120vh;
  }
  .title[data-v-05031344] {
    font-size: 30px;
  }
}
@media (max-width: 768px) {
  .info-images {
    display: none;
  }
  .hero h5 {
    letter-spacing: 0;
    text-align: center;
    font-size: 0px;
    font-size: 20px;
    margin: 0 0 100px 0;
  }
  .hero {
    height: 160vh;
  }
  .info__row {
    transform: translateY(0px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-gradient {
    width: 100%;
  }
  .info-item {
    margin: 0;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  .btn-white {
    display: none;
  }
  .hero h4 {
    padding: 0;
    text-align: center;
  }
  .footer__row {
    flex-wrap: inherit;
    justify-content: center;
  }
  .about-us {
    display: none;
  }
  .links {
    display: none;
  }
  .footer span {
    padding: 20px;
    align-items: center;
  }
  .contacts {
    text-align: center;
  }
  .auth {
    display: none;
  }
  .title[data-v-05031344] {
    font-size: 30px;
  }
}
@media (max-width: 820px) {
  .info-images {
    display: none;
  }
  .hero h5 {
    letter-spacing: 0;
    text-align: center;
    font-size: 0px;
    font-size: 20px;
    margin: 0 0 100px 0;
  }
  .hero {
    height: 150vh;
  }
  .info__row {
    transform: translateY(0px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-gradient {
    width: 100%;
  }
  .info-item {
    margin: 0;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  .btn-white {
    display: none;
  }
  .hero h4 {
    padding: 0;
    text-align: center;
  }
  .footer__row {
    flex-wrap: inherit;
    justify-content: center;
  }
  .about-us {
    display: none;
  }
  .links {
    display: none;
  }
  .footer span {
    padding: 20px;
    align-items: center;
  }
  .contacts {
    text-align: center;
  }
  .auth {
    display: none;
  }
  .title[data-v-05031344] {
    font-size: 30px;
  }
}
@media (max-width: 1024px) {
  .hero {
    height: 72vh;
  }
  .logo {
    margin: 0 0 0 80px;
  }
  .features__img {
    display: none;
  }
  .hero {
    height: 100vh;
  }
  .footer__row {
    flex-wrap: inherit;
    justify-content: center;
  }
  .about-us {
    display: none;
  }
  .links {
    display: none;
  }
  .footer span {
    padding: 20px;
    align-items: center;
  }
  .contacts {
    text-align: center;
  }
  .info-images {
    display: none;
  }
  .GroupImg {
    display: block;
  }
  .hero__title {
    width: 100%;
    text-align: center;
  }
  .info {
    display: none;
  }
}
</style>
