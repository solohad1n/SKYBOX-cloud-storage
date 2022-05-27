<template>
  <router-link class="logo" to="/"> SKYBOX </router-link>
</template>

<script setup>
</script>

<style>
.logo {
  font-family: "Comfortaa";
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-decoration: none;
  line-height: 40px;
  text-transform: uppercase;
  color: #ffffff;
}
@media (max-width: 414px) {
  .logo {
    margin: 0 0 220px 0;
  }
}
@media (max-width: 768px) {
  .logo {
    margin: 0 0 400px 0;
  }
}
@media (max-width: 820px) {
  .logo {
    margin: 0 0 230px 0;
  }
}
</style>