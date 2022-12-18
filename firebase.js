// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcs4kx_XkztBNixwutF0SNA_mZ4Xj3fCY",
  authDomain: "skechers-clone-vue.firebaseapp.com",
  projectId: "skechers-clone-vue",
  storageBucket: "skechers-clone-vue.appspot.com",
  messagingSenderId: "875124298159",
  appId: "1:875124298159:web:e0546a23cdb0745dd55f5a",
  measurementId: "G-PXPZZV54S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);