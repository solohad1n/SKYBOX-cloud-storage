<script setup>
import Item from "./Item.vue";
import Tariffs1 from "@/assets/1Tariffs.svg";
import Tariffs2 from "@/assets/2Tariffs.svg";
import Tariffs3 from "@/assets/3Tariffs.svg";
import Header from "../Header/Header.vue";
import Title from "../Title/Title.vue";
import Info from "../Info/Info.vue";
import Footer from "../Footer/Footer.vue";
</script>

<template>
  <section class="tariffs">
    <div class="container">
      <div class="tariffs__row">
        <div class="tariffs__item">
          <img class="Tariffs1" :src="Tariffs1" alt="" />
          <h2>30 days</h2>
          <h3>$20.99</h3>
          <div class="tariffs__item__border"></div>
          <Item />
          <div class="singup__active">
            <button>Купить</button>
            <span>14-day money back guarantee</span>
            <router-link to="/signup">
              <div></div>
            </router-link>
          </div>
        </div>

        <div class="tariffs__item">
          <img class="Tariffs2" :src="Tariffs2" alt="" />
          <h2>90 days</h2>
          <h3>$46.99</h3>
          <div class="tariffs__item__border"></div>
          <Item />
          <div class="singup__active">
            <button>Купить</button>
            <span>14-day money back guarantee</span>
            <router-link to="/signup">
              <div></div>
            </router-link>
          </div>
        </div>
        <div class="tariffs__item">
          <img class="Tariffs3" :src="Tariffs3" alt="" />
          <h2>365 days</h2>
          <h3>$127.99</h3>
          <div class="tariffs__item__border"></div>
          <Item />
          <div class="singup__active">
            <button>Купить</button>
            <span>14-day money back guarantee</span>
            <router-link to="/signup">
              <div></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.tariffs__row {
  display: flex;
  max-width: 980px;
  margin: 0 auto;
}
.tariffs__item {
  width: 33.3%;
  text-align: center;
  padding: 80px 50px 100px 50px;
  background: #ffffff;
  margin: 10px;
  border-radius: 10px;
  position: relative;
  transition-duration: 0.5s;
  overflow: hidden;
}
.tariffs__item img {
  position: absolute;
  left: 0;
  top: 0;
}
.Tariffs1 {
  width: 250px;
  height: 115px;
}
.Tariffs2 {
  width: 280px;
  height: 170px;
}
.Tariffs3 {
  width: 360px;
  height: 280px;
}

.tariffs__item:hover {
  padding: 85px 90px 105px 90px;
  opacity: 100%;
  box-shadow: 2px 2px 6px #c7c4c4;
}
.tariffs__items__price {
  text-align: left;
  margin-left: 10px;
  margin: 50px 0 50px 0;
}
.tariffs__items__price span {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #567796;
}
.tariffs__items__price-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
}
.tariffs__item h2 {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #3b668d;
}
.tariffs__item h3 {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 50px;
  color: #8572ff;
  padding: 0 0 100px 0;
}

.singup__active {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-duration: 1.5s;
  cursor: pointer;
}
.singup__active:hover {
  opacity: 100%;
}
.singup__active div {
  height: 700px;
  width: 306px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.singup__active button {
  border: none;
  outline: none;
  padding: 15px 50px;
  border-radius: 25px;
  background: linear-gradient(90deg, #43a1d6 0%, #907eff 100%);
  border-radius: 62px;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
}
.singup__active span {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 100%;
  color: #567796;
  padding: 25px 0 0 0;
}
.tariffs__item__border {
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
}
@media (max-width: 414px) {
  .tariffs__row {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  h5[data-v-2fcf6d41] {
    display: none;
  }
  .tariffs__item {
    padding: 85px 90px 105px 90px;
    opacity: 100%;
    box-shadow: 2px 2px 6px #c7c4c4;
  }
  .singup__active {
    opacity: 100%;
  }
  .singup__active button {
    padding: 10px 5px;
  }
}
@media (max-width: 768px) {
  .tariffs__row {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  h5[data-v-2fcf6d41] {
    display: none;
  }
  .tariffs__item {
    padding: 85px 90px 105px 90px;
    opacity: 100%;
    box-shadow: 2px 2px 6px #c7c4c4;
  }
  .singup__active {
    opacity: 100%;
  }
  .singup__active button {
    padding: 10px 5px;
  }
}
@media (max-width: 820px) {
  .tariffs__row {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  h5[data-v-2fcf6d41] {
    display: none;
  }
  .tariffs__item {
    padding: 85px 90px 105px 90px;
    opacity: 100%;
    box-shadow: 2px 2px 6px #c7c4c4;
  }
  .singup__active {
    opacity: 100%;
  }
  .singup__active button {
    padding: 10px 5px;
  }
}
@media (max-width: 1024px) {
  .tariffs__row {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  h5[data-v-2fcf6d41] {
    display: none;
  }
  .tariffs__item {
    padding: 85px 90px 105px 90px;
    opacity: 100%;
    box-shadow: 2px 2px 6px #c7c4c4;
  }
  .singup__active {
    opacity: 100%;
  }
  .singup__active button {
    padding: 10px 5px;
  }
}
</style>