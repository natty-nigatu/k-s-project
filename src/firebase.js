import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1MzPCmQjIU1fmi8TLYF3vHsNxcn27S6M",
    authDomain: "k-s-project-fbdd6.firebaseapp.com",
    projectId: "k-s-project-fbdd6",
    storageBucket: "k-s-project-fbdd6.appspot.com",
    messagingSenderId: "493610418688",
    appId: "1:493610418688:web:9f783e8cf6cba8cf7b4ee5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
