import { ref, watchEffect } from 'vue'
import { firestore } from '@/firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    const collectionRef = firestore.collection(collection).orderBy('time')

    const unsub = collectionRef.onSnapshot(
        (snap) => {
            let result = []
            snap.docs.forEach((doc) => {
                doc.data().time && result.push({ ...doc.data(), id: doc.id })
            })
            documents.value = result
            error.value = null
        },
        (error) => {
            console.log(error.message)
            documents.value = null
            error.value = 'Не возможно получить данные'
        },
    )

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub());
    })
    return { documents, error }
}

export default getCollection