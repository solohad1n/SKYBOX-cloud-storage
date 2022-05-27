import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDQbGAHUbr01McXjgra3yQFnfiZhSYeO9g",
    authDomain: "online-storage-fb17b.firebaseapp.com",
    projectId: "online-storage-fb17b",
    storageBucket: "online-storage-fb17b.appspot.com",
    messagingSenderId: "626083911717",
    appId: "1:626083911717:web:c996b2f630fe8d10aec7cc"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const storage = firebase.storage

export { firestore, timestamp, auth, storage }

// import { initializeApp } from "firebase/app";
// import { getFirestore, serverTimestamp } from 'firebase/firestore'
// import { getStorage } from "firebase/storage";
// import { getAuth } from 'firebase/auth'
// import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyDQbGAHUbr01McXjgra3yQFnfiZhSYeO9g",
//     authDomain: "online-storage-fb17b.firebaseapp.com",
//     projectId: "online-storage-fb17b",
//     storageBucket: "online-storage-fb17b.appspot.com",
//     messagingSenderId: "626083911717",
//     appId: "1:626083911717:web:c996b2f630fe8d10aec7cc"
// };

// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app)
// const auth = getAuth(app)
// const timestamp = serverTimestamp()
// const storage = getStorage(app)
// const time = serverTimestamp()

// export { firestore, timestamp, auth, storage, time }



