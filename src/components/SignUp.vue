<script setup>
import Header from "./Header/Header.vue";
import Title from "./Title/Title.vue";
import Input from "./Inputs/Input.vue";
import Button from "./Buttons/Button.vue";
import Info from "./Info/Info.vue";
import Footer from "./Footer/Footer.vue";
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

const handleSubmit = async () => {
  const { error, signup } = useSignup();
  await signup(email.value, password.value, name.value);

  if (!error.value) {
    router.push("profile");
  } else {
    alert(error.value);
  }
};
</script>

<template>
  <Header className="basic-header" />
  <div class="signup">
    <Title title="Регистрация" />
    <form @submit.prevent="handleSubmit" class="signup__form">
      <div class="input__item">
        <h4>Имя</h4>
        <input
          v-model="name"
          type="text"
          required
          placeholder="Имя"
          class="input-regular"
        />
      </div>
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
      <!-- <Input
        v-model="email"
        type="email"
        requirement="Почта"
        placeholder="mail@example.com"
      /> -->
      <!-- <Input
        v-model="password"
        type="password"
        requirement="Пароль"
        placeholder="Придумайте пароль"
      /> -->
      <Button
        className="btn-gradient signup__button"
        text="Зарегистрироваться"
      />
    </form>
  </div>
  <Info />
  <Footer />
</template>

<style>
.signup {
  margin-bottom: 50px;
}
.signup__form {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup__button {
  padding: 16px 40px;
}
@media (max-width: 414px) {
  .title[data-v-2fcf6d41] {
    letter-spacing: 0.1em;
  }
  .basic-header {
    margin: -50px 0 0 0;
    height: 60vh;
  }
  .signup__form {
    align-items: flex-end;
    padding: 30px;
  }
  .signup__button {
    margin: 20px 0 0 0;
  }
}
@media (max-width: 768px) {
  .title[data-v-2fcf6d41] {
    letter-spacing: 0.1em;
  }
  .basic-header {
    margin: -50px 0 0 0;
    height: 60vh;
  }
  .signup__form {
    align-items: center;
    padding: 30px;
  }
  .signup__button {
    margin: 20px 0 0 0;
  }
}
@media (max-width: 820px) {
    .title[data-v-2fcf6d41] {
    letter-spacing: 0.1em;
  }
  .basic-header {
    margin: -50px 0 0 0;
    height: 60vh;
  }
  .signup__form {
    align-items: center;
    padding: 30px;
  }
  .signup__button {
    margin: 20px 0 0 0;
  }
}
</style>