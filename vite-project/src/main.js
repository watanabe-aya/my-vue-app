import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router/index';

import  "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbWm4bOiAxuFYBndtcM9ilkk3EXBPNUoo",
  authDomain: "vite-project-1fc4a.firebaseapp.com",
  projectId: "vite-project-1fc4a",
  storageBucket: "vite-project-1fc4a.appspot.com",
  messagingSenderId: "528133190288",
  appId: "1:528133190288:web:12ab9d0489a08eeec8de15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount('#app')
