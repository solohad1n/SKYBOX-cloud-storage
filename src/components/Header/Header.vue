<script setup>
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import Authorization from "./Authorization.vue";
const props = defineProps({
  className: String,
});
</script>

<template>
  <header :class="{ header: !className, [className]: className }">
    <div class="container">
      <div class="header__row">
        <Logo />
        <Nav />
        <div class="header__row__authorization">
          <Authorization />
        </div>
      </div>
    </div>
  </header>
</template>

<style>
header,
.basic-header {
  padding-top: 50px;
}
.header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 100px 0;
}
.basic-header {
  background-image: url("@/assets/contact-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 36vh;
}
@media (max-width: 420px) {
  .header {
    padding: 0;
  }
  .header__row {
    position: relative;
    align-items: baseline;
    margin: 0;
  }
  .header__row__authorization {
    position: absolute;
    top: 500px;
    left: 35%;
  }
}
@media (max-width: 768px) {
  .header {
    padding: 0;
  }
  .header__row {
    position: relative;
    align-items: baseline;
    margin: 0;
  }
  .header__row__authorization {
    position: absolute;
    top: 500px;
    left: 35%;
  }
}
@media (max-width: 820px) {
  .header {
    padding: 0;
  }
  .header__row {
    position: relative;
    align-items: baseline;
    margin: 0;
  }
  .header__row__authorization {
    position: absolute;
    top: 500px;
    left: 35%;
  }
}

</style>