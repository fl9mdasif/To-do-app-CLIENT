// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBSYxxD0y77EbvFBoBkZFdvQllSRMQJapw",
    authDomain: "to-do-app-d4647.firebaseapp.com",
    projectId: "to-do-app-d4647",
    storageBucket: "to-do-app-d4647.appspot.com",
    messagingSenderId: "131803026239",
    appId: "1:131803026239:web:4cf400e761b861314af98a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;