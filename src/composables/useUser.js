import { ref } from 'vue'
import { auth } from '@/firebase/config'

export const user = ref(auth.currentUser)

auth.onAuthStateChanged((_user) => {
    user.value = _user
})

// import { onAuthStateChanged } from "firebase/auth";
// import { ref } from "vue";
// import { auth } from "../firebase/config";

// export const user = ref(auth.currentUser)

// onAuthStateChanged(auth, (_user) => {
//     user.value = _user
// })