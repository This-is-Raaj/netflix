// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoB6IXHatA1oGL-Nw_HoXJFuMcUvJudV4",
    authDomain: "netflixgpt-96c2e.firebaseapp.com",
    projectId: "netflixgpt-96c2e",
    storageBucket: "netflixgpt-96c2e.appspot.com",
    messagingSenderId: "610193047813",
    appId: "1:610193047813:web:fa4aadd570ac986546b76c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()