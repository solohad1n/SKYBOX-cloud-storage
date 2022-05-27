import { ref } from "vue"
import { storage } from "../firebase/config"
import { user } from "./useUser"

const useStorage = () => {
    const uploadFile = async (file) => {
        const error = ref(null)
        const url = ref(null)
        const filePath = ref(null)
        try {
            filePath.value = `usersFiles / ${user.value.uid} /${file.name}`
            const storageRef = storage.ref(filePath.value)
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
        }
        catch (err) {
            error.value = err.message
        }

        return { error, url, filePath }
    }
    return { uploadFile }
}

export default useStorage

// import { storage } from "../firebase/config"
// import { user } from "./useUser"
// import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage"

// const useStorage = () => {
//     const uploadFile = async (file) => {
//         const storageRef = ref(storage, `usersFiles/${user.value.uid}/${file.name}`)
//         const upload = await uploadBytesResumable(storageRef, file)
//         const uploadedImageUrl = await getDownloadURL(storageRef)
//         console.log(uploadedImageUrl)

//         return uploadedImageUrl
//     }

//     return { uploadFile }
// }

// export default useStorage