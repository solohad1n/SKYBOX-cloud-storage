<script setup>
const props = defineProps({
  type: String,
  placeholder: String,
  className: String,
  requirement: String,
});
</script>

<template>
  <div class="input__item">
    <h4 v-if="!className">{{ requirement }}</h4>
    <input
      :type="type"
      required
      :placeholder="placeholder"
      :class="{ 'input-regular': !className, [className]: className }"
    />
  </div>
</template>

<style>
.input__item {
  display: flex;
  align-items: center;
}
.input__item h4 {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-right: 25px;
  line-height: 27px;
  color: #3b3f8d;
}
input {
  background: #f3f3f3;
  border-radius: 61px;
  outline: none;
  border: none;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 27px;
  color: #adadad;
}
.input-regular {
  padding: 15px 150px 15px 18px;
}
.input-message {
  padding: 15px 235px 150px 18px;
  border-radius: 30px;
}
.input-message::placeholder {
  width: 100%;
}
@media (max-width: 414px) {
  .input-regular {
    padding: 10px 50px 10px 10px;
    margin: 5px;
  }
  .input-message {
    padding: 10px 150px 150px 18px;
    margin: 5px;
  }
}
@media (max-width: 768px) {
  .input-regular {
    padding: 10px 50px 10px 10px;
    margin: 5px;
  }
  .input-message {
    padding: 10px 150px 150px 18px;
    margin: 5px;
  }
}
@media (max-width: 820px) {
  .input-regular {
    padding: 10px 50px 10px 10px;
    margin: 5px;
  }
  .input-message {
    padding: 10px 150px 150px 18px;
    margin: 5px;
  }
}
</style>