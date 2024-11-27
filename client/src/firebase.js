// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyAjhkjN2OdtxfJDIuiJH6aiCDN1wezBqIg",
  authDomain: "webai-765fa.firebaseapp.com",
  projectId: "webai-765fa",
  storageBucket: "webai-765fa.firebasestorage.app",
  messagingSenderId: "536743848764",
  appId: "1:536743848764:web:21a00aff3a54d8bfeb0c39",
  measurementId: "G-ECY4EK5Q4T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);