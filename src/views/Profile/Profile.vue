<template>
  <Header className="basic-header" />
  <Title title="Мои Файлы" />
  <div class="container">
    <div class="table">
      <div class="table__info">
        <span>Имя</span>
        <div>
          <span>Размер</span>
          <span>Tип</span>
          <span>Время Загрузки</span>
        </div>
      </div>
      <div v-if="documents" class="files">
        <div class="file" v-for="doc in formattedDocuments" :key="doc.id">
          <span>{{ doc.name }}</span>
          <div>
            <span>{{ doc.size }} Мб</span>
            <span>{{ doc.type }}</span>
            <span>{{ doc.time }} назад</span>
            <img @click="handleDelete" :src="deleteIcon" alt="" />
          </div>
        </div>
      </div>
      <p class="table__loading" v-else>Файлов пока нет...</p>
      <div class="upload">
        <input class="upload__input" @change="handleChangeFile" type="file" />
        <span class="upload__button" @click="handleUpload()"
          >Загрузить Файл</span
        >
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from "../../components/Header/Header.vue";
import Title from "../../components/Title/Title.vue";
import Footer from "../../components/Footer/Footer.vue";
import Button from "../../components/Buttons/Button.vue";
import { formatDistanceToNow } from "date-fns";
import useStorage from "../../composables/useStorage";
import { ru } from "date-fns/locale";
import { computed } from "@vue/runtime-core";
import useCollection from "../../composables/useCollection";
import getCollection from "../../composables/getCollection";
import { timestamp } from "../../firebase/config";
import { ref } from "@vue/reactivity";
import deleteIcon from "@/assets/delete-icon.svg";

const { uploadFile } = useStorage();
const { addFile } = useCollection("files");
const { deleteFile } = useCollection("files");
const { documents } = getCollection("files");
const file = ref(null);

const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      const uploadedAt = formatDistanceToNow(doc.time.toDate(), { locale: ru });
      return { ...doc, time: uploadedAt };
    });
  }
});

const handleDelete = async () => {
  await deleteFile(file)
}

const handleUpload = async () => {
  const newFile = {
    name: file.value.name,
    size: (file.value.size / 1000000).toFixed(2),
    type: file.value.type,
    time: timestamp(),
  };
  await uploadFile(file.value);
  await addFile(newFile);
  console.log(newFile);
};

const handleChangeFile = (event) => {
  file.value = event.target.files[0];
  console.log(file.value);
};
</script>

<style>
.table {
  background: #fff;
  filter: drop-shadow(0px 3px 6px rgba(75, 81, 91, 0.15))
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));
  border-radius: 5px;
}
.table__info {
  /* background: #f4f7fc; */
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}
.table__loading {
  font-family: "Roboto", "sans-serif";
  font-size: 18px;
  text-align: center;
}
.table__info span {
  font-family: "Roboto", "sans-serif";
  font-size: 14px;
}
.table__info div span {
  margin-left: 130px;
  font-family: "Roboto", "sans-serif";
  font-size: 14px;
}
.table__info div span:last-child {
  margin-right: 50px;
}
.table__info div span:nth-child(2) {
  margin-right: 80px;
  margin-left: 160px;
}
.files {
  overflow: auto;
}
.file {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: #f4f7fc;
  font-family: "Roboto", "sans-serif";
  margin-bottom: 5px;
}
.file:last-child {
  margin-bottom: 15px;
}
.file div span {
  margin-left: 190px;
  font-size: 14px;
}
.file div span:last-child {
  margin-left: 167px;
  margin-right: 60px;
}
.file div span:nth-child(2) {
  margin-left: 135px;
}
.file div img {
  margin-left: 30px;
  cursor: pointer;
}
.upload {
  display: flex;
  justify-content: right;
}
.upload__button {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  padding: 11px 15px;
  cursor: pointer;
  text-transform: uppercase;
  color: #bb6df3;
  background: #fff;
  border: none;
  box-sizing: border-box;
  border-radius: 15px;
  filter: drop-shadow(0px 3px 6px rgba(75, 81, 91, 0.15))
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));
  margin-bottom: 20px;
  margin-right: 15px;
  margin-left: 15px;
}
.upload__input::-webkit-file-upload-button {
  height: 100%;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  cursor: pointer;
  text-transform: uppercase;
  color: #bb6df3;
  background: #fff;
  border: none;
  box-sizing: border-box;
  border-radius: 15px;
  filter: drop-shadow(0px 3px 6px rgba(75, 81, 91, 0.15))
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));
  padding: 11px 15px;
}
</style>