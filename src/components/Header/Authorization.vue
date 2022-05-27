<script setup>
import Button from "../Buttons/Button.vue";
import { user } from "@/composables/useUser";
import useLogout from "../../composables/useLogout";
import { useRouter } from "vue-router";
import { watch, watchEffect } from "@vue/runtime-core";

const { error, logout } = useLogout();
const router = useRouter();

const handleClickLogout = async () => {
  await logout();

  if (!error.value) {
    router.push("/login");
  } else {
    alert(error.value);
  }
};
</script>

<template>
  <div v-if="!user" class="auth">
    <router-link class="auth__link" to="/login">Войти</router-link>
    <router-link to="/signup">
      <Button text="Регистрация" />
    </router-link>
  </div>
  <div v-else>
    <router-link class="profile__link" to="/profile">мои файлы</router-link>
    <Button @click="handleClickLogout" text="Выйти" />
  </div>
</template>

<style>
.auth__link,
.profile__link {
  text-decoration: none;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 13.4237px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #ffffff;
  margin-right: 25px;
}
</style>