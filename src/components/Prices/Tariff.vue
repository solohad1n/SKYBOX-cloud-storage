<script setup>
import Item from "./Item.vue";
import Tariffs1 from "@/assets/1Tariffs.svg";
import Tariffs2 from "@/assets/2Tariffs.svg";
import Tariffs3 from "@/assets/3Tariffs.svg";
import Header from "../Header/Header.vue";
import Title from "../Title/Title.vue";
import Info from "../Info/Info.vue";
import Footer from "../Footer/Footer.vue";
import Prices from './Prices.vue';
</script>

<template>
<Header className="basic-header" />
<Title title="Тарифы" />
<Prices/>
<Info/>
<Footer/>
</template>

<style>
@media (max-width: 414px) {
}
@media (max-width: 768px) {
}
@media (max-width: 820px) {
}
@media (max-width: 1024px) {
}
</style>