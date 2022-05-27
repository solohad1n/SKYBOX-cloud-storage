import { ref } from 'vue'
import { auth } from '@/firebase/config'
const error = ref(null)

const login = async (email, password) => {
    error.value = null

    try {
        const response = await auth.signInWithEmailAndPassword(email, password)
        error.value = null

        console.log(response)
        return response
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin

// import { signInWithEmailAndPassword } from "firebase/auth";
// import { ref } from "vue";
// import { auth } from "../firebase/config";

// const error = ref(null)

// const login = async (email, password) => {

//     try {
//         const response = await signInWithEmailAndPassword(auth, email, password)
//         error.value = null

//         console.log(response)
//         return response
//     }
//     catch (err) {
//         error.value = err.message
//     }
// }

// const useLogin = () => {
//     return { error, login }
// }

// export default useLogin