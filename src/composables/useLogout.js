import { ref } from 'vue'
import { auth } from '@/firebase/config'

const error = ref(null)

const logout = async () => {
	error.value = null

	try {
		await auth.signOut()
	} catch (err) {
		console.log(err)
	}
}

const useLogout = () => {
	return { error, logout }
}

export default useLogout

// import { signOut } from "firebase/auth"
// import { ref } from "vue"
// import { auth } from '../firebase/config'

// const error = ref(null)

// const logout = async () => {
//     error.value = null

//     try {
//         await signOut(auth)

//         error.value = null
//     }
//     catch (err) {
//         error.value = err.message
//     }
// }

// const useLogout = () => {
//     return { logout, error }
// }

// export default useLogout