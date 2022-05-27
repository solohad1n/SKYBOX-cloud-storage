import { ref } from 'vue'
import { firestore } from '@/firebase/config'

const useCollection = (collection) => {
    const error = ref(null)

    const addDocument = async (doc) => {
        error.value = null
        try {
            await firestore.collection(collection).add(doc)
        } catch (err) {
            console.log(err.message)
            err.value = 'Произошла ошибка во время отправки сообщения'
        }
    }

    const addFile = async (doc) => {
        error.value = null
        try {
            await firestore.collection(collection).add(doc)
        } catch (err) {
            console.log(err.message)
            err.value = 'Произошла ошибка во время загрузки файла'
        }
    }

    const deleteFile = async (doc) => {
        error.value = null
        try {
            await firestore.collection(collection).delete(doc)
        } catch (err) {
            console.log(err.message)
            err.value = 'Произошла ошибка во время удаления файла'
        }
    }

    return { addDocument, error, addFile, deleteFile }
}

export default useCollection

// import { ref } from "vue"
// import { firestore } from "../firebase/config"
// import { collection, addDoc } from "firebase/firestore"


// const useCollection = () => {
//     const addDocument = async (newDoc) => {
//         const error = ref(null)
//         try {
//             const collectionRef = collection(firestore, 'messages')
//             await addDoc(collectionRef, newDoc)

//             error.value = null
//         }
//         catch (err) {
//             error.value = err.message
//         }
//         return { error }
//     }

//     const addFile = async (newDoc) => {
//         const error = ref(null)
//         try {
//             const collectionRef = collection(firestore, 'files')
//             await addDoc(collectionRef, newDoc)

//             error.value = null
//         }
//         catch (err) {
//             error.value = err.message
//         }
//         return { error }
//     }

//     return { addDocument, addFile }
// }

// export default useCollection