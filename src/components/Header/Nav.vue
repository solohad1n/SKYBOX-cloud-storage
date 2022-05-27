<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item" v-for="item in navItems" :key="item">
        <router-link class="nav__link" :to="item.path">{{
          item.label
        }}</router-link>
      </li>
    </ul>
    <div class="nav__burger-menu">
      <div @click="headerClickShowList" class="burger-menu">
        <svg
          width="52"
          height="26"
          viewBox="0 0 52 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="51.0714" height="5.57143" rx="2.78571" fill="white" />
          <rect
            y="10.2142"
            width="51.0714"
            height="5.57143"
            rx="2.78571"
            fill="white"
          />
          <rect
            y="20.4286"
            width="51.0714"
            height="5.57143"
            rx="2.78571"
            fill="white"
          />
        </svg>
        <ul v-if="showList" class="nav__list__burger-menu">
          <li
            class="nav__item__burger-menu"
            v-for="item in navItems"
            :key="item"
          >
            <router-link class="nav__link" :to="item.path">{{
              item.label
            }}</router-link>
          </li>
          <li class="nav__item__burger-menu__login">
            <router-link class="nav__link" to="/login">Войти</router-link>
          </li>
          <li class="nav__item__burger-menu__signup">
            <router-link class="nav__link" to="/signup">
              Регистрация
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
import Authorization from "./Authorization.vue";
export default {
  setup() {
    const showList = ref(false);

    const headerClickShowList = () => {
      showList.value = !showList.value;
    };

    return {
      navItems: [
        {
          id: 1,
          label: "Главная",
          path: "/",
        },
        {
          id: 2,
          label: "Тарифы",
          path: "/tariff",
        },
        {
          id: 3,
          label: "Контакты",
          path: "/contact",
        },
      ],
      showList,
      headerClickShowList,
    };
  },
};
</script>

<style>
.nav__list {
  display: flex;
}
.nav__item {
  margin-right: 70px;
}
.nav__link {
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;
}
.nav__item:last-child {
  margin-right: 0;
}
/* -------- */

.nav__burger-menu {
  display: none;
}
.burger-menu svg {
  padding: 30px 55px 0 30px;
}

.nav__item__burger-menu {
  padding: 10px 5px;
  margin: 0;
  background: linear-gradient(309.01deg, #6788ff 11.77%, #c293ff 78.31%);
  border-radius: 4px;
  margin: 2px;
  text-align: center;
}
.nav__item__burger-menu:hover {
  background: linear-gradient(309.01deg, #1534a3 11.77%, #b886fa 78.31%);
}
.nav__item__burger-menu__login {
  padding: 10px;
  background:#4a6adc ;
  text-align: center;
  border-radius: 4px;
  font-weight: 900;
}
.nav__item__burger-menu__login .nav__link {

  font-weight: 900;
}
.nav__item__burger-menu__signup .nav__link  {
  color: rgb(255, 255, 255);
  font-weight: 900;
}
.nav__item__burger-menu__signup {
  padding: 10px;
  background: linear-gradient(309.01deg, #7ABFFF 21.77%, #ff9b0e 55.31%);
  text-align: center;
  border-radius: 6px;
}

@media (max-width: 414px) {
  .nav__list {
    display: none;
  }
  .nav__burger-menu {
    display: block;
  }
}
@media (max-width: 768px) {
  .nav__list {
    display: none;
  }
  .nav__burger-menu {
    display: block;
  }
}
@media (max-width: 820px) {
  .nav__list {
    display: none;
  }
  .nav__burger-menu {
    display: block;
  }
}
</style>  