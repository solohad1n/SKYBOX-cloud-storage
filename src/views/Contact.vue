<script setup>
import Header from "../components/Header/Header.vue";
import Info from "../components/Info/Info.vue";
import Footer from "../components/Footer/Footer.vue";
import Input from "../components/Inputs/Input.vue";
import Button from "../components/Buttons/Button.vue";
import Title from "../components/Title/Title.vue";
import { ref } from "@vue/reactivity";
import { user } from "../composables/useUser";
import useCollection from "../composables/useCollection";

const message = ref("");

const { addDocument } = useCollection("messages");

const handleSubmitMessage = async () => {
  const chat = {
    userEmail: user.value.email,
    userName: user.value.displayName,
    message: message.value,
  };

  await addDocument(chat);

  message.value = "";
};
</script>

<template>
  <section class="contact">
    <Header className="basic-header" />
    <Title title="Контакт" />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21154.489828520134!2d33.33592634826419!3d35.13521760068828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1a2976764cf7%3A0x9a004774d887bfab!2z0KHRgtGA0L7QstC-0LvQvtGBLCDQmtC40L_RgA!5e0!3m2!1sru!2skg!4v1647864954818!5m2!1sru!2skg"
      width="100%"
      height="600"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    <div v-if="user">
      <div class="contact__message">
        <h2>Напишите нам</h2>
        <div class="input__item">
          <input
            type="text"
            placeholder="Сообщение"
            className="input-message"
            v-model="message"
          />
        </div>
        <Button
          @click="handleSubmitMessage"
          className="btn-gradient contact__button"
          text="Отправить"
        />
      </div>
    </div>
    <Info />
    <Footer />
  </section>
</template>

<style>
input {
  margin-bottom: 20px;
}
iframe {
  margin-bottom: 150px;
}
.contact__message {
  background-image: url("@/assets/message-bg.svg");
  background-size: cover;
  height: 100vh;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact__message h2 {
  margin-top: 150px;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 80px;
  margin-bottom: 30px;
  text-align: center;
  color: #3b668d;
}
.contact__button {
  padding: 12px 40px;
}
@media (max-width: 414px) {
  .cont {
    max-width: 350px;
    margin: 0 auto;
  }
  .basic-header {
    margin: -50px 0 0 0;
    height: 60vh;
  }
  .contact__message {
    background-image: none;
  }
}
@media (max-width: 768px) {
  .cont {
    max-width: 740px;
    margin: 0 auto;
  }
  .basic-header {
    margin: -50px 0 0 0;
    height: 60vh;
  }
  .contact__message {
    background-image: none;
  }
}
@media (max-width: 820px) {
  .cont {
    max-width: 740px;
    margin: 0 auto;
  }
  .basic-header {
    margin: -50px 0 0 0;
    height: 60vh;
  }
  .contact__message {
    background-image: none;
  }
}
@media (max-width: 1024px) {
  .cont {
    max-width: 740px;
    margin: 0 auto;
  }
  .basic-header {
    height: 60vh;
  }
  .contact__message {
    background-image: none;
  }
}
</style>