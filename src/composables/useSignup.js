import { ref } from 'vue'
import { auth } from '@/firebase/config'
const error = ref(null)

const signup = async (email, password, name) => {
  error.value = null

  try {
    const response = await auth.createUserWithEmailAndPassword(email, password)

    if (!response) {
      throw new Error('Невозможно провести регистрацию')
    }

    await response.user.updateProfile({ displayName: name })
    error.value = null

  return response
  } catch (err) {
    console.log(err.message)
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup

// import { auth } from "../firebase/config";
// import { ref } from "vue";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// export const signup = async (email, password, name) => {
//     const error = ref(null)

//     try {
//         const response = await createUserWithEmailAndPassword(auth, email, password)

//         await updateProfile(response.user, {
//             displayName: name
//         })
//     }
//     catch (err) {
//         error.value = err.message
//     }

//     return { error }
// }