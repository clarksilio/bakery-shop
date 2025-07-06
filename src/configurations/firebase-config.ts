// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5jpP3lDWXcWanY2e_4bxT46PsztdVSTE",
    authDomain: "bakery-shop-react-a2400.firebaseapp.com",
    projectId: "bakery-shop-react-a2400",
    storageBucket: "bakery-shop-react-a2400.firebasestorage.app",
    messagingSenderId: "961188148144",
    appId: "1:961188148144:web:ac0bca7290136c241d9c75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);