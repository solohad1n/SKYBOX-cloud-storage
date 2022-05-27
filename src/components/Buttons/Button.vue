<script setup>
const props = defineProps({
  text: String,
  className: String,
});
</script>

<template>
  <button :class="{ 'btn-white': !className, [className]: className }">
    {{ text }}
  </button>
</template>

<style>
button {
  cursor: pointer;
}
.btn-white {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #bb6df3;
  background: #fff;
  padding: 11px 30px;
  border: none;
  box-sizing: border-box;
  border-radius: 15px;
}
.btn-gradient {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  border: none;
  color: #ffffff;
  background: linear-gradient(90deg, #43a1d6 0%, #907eff 100%);
  border-radius: 62px;
}
</style>