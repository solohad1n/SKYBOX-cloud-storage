<script setup>
import Header from "./Header/Header.vue";
import Title from "./Title/Title.vue";
import Input from "./Inputs/Input.vue";
import Button from "./Buttons/Button.vue";
import Info from "./Info/Info.vue";
import Footer from "./Footer/Footer.vue";
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";
import { user } from "../composables/useUser";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleSubmit = async () => {
  const { error, login } = useLogin();

  await login(email.value, password.value);

  if (!error.value) {
    router.push("profile");
  } else {
    alert(error.value);
  }
};
</script>

<template>
  <main>
    <Header className="basic-header" />
    <div class="login">
      <Title title="Авторизация" />
      <form @submit.prevent="handleSubmit" class="login__form">
        <div class="input__item">
          <h4>Почта</h4>
          <input
            v-model="email"
            type="email"
            required
            placeholder="mail@example.com"
            class="input-regular"
          />
        </div>
        <div class="input__item">
          <h4>Пароль</h4>
          <input
            v-model="password"
            type="password"
            required
            placeholder="Password"
            class="input-regular"
          />
        </div>
        <Button className="btn-gradient login__button" text="Войти" />
      </form>
    </div>
    <Info />
    <Footer />
  </main>
</template>

<style>
.login {
  margin-bottom: 50px;
}
.login__form {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login__button {
  padding: 16px 40px;
}
@media (max-width: 1024px) {
  .info__row {
    display: none;
  }
  input {
    margin: 5px;
  }
}
</style>