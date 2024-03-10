import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "",
    authDomain: "gallery-c1598.firebaseapp.com",
    projectId: "gallery-c1598",
    storageBucket: "gallery-c1598.appspot.com",
    messagingSenderId: "257061931459",
    appId: "1:257061931459:web:e83d364b93d8ba70a1d576"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp)
