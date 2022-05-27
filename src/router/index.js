import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Contact from "../views/Contact.vue"
import SignUp from "../components/SignUp.vue"
import LogIn from "../components/LogIn.vue"
import Tariff from "../components/Prices/Tariff.vue"
import Profile from "../views/Profile/Profile.vue"
import { auth } from "../firebase/config"
import { ref } from 'vue'

// const requireAuth = async (to, from, next) => {
//   const user = ref(auth.currentUser)
//   if (!user.value) {
//     return next({ name: 'LogIn' })
//   }

//   return next()
// }


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'LogIn',
      component: LogIn,
    },
    {
      path: '/tariff',
      name: 'Tariff',
      component: Tariff,
    },
    {
      path: '/profile',
      name: 'Profile',
      // beforeEnter: requireAuth,
      component: Profile,
    }
  ]
})

export default router
