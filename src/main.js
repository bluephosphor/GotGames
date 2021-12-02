import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firestore } from 'firebase/firestore';
import { auth } from 'firebase/auth';
import { functions } from 'firebase/functions';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcSb3a8xBXAb2vq6XgcHFlneErrghK72c",
  authDomain: "portfolio-9bd65.firebaseapp.com",
  projectId: "portfolio-9bd65",
  storageBucket: "portfolio-9bd65.appspot.com",
  messagingSenderId: "490093671642",
  appId: "1:490093671642:web:e1eed53da34657396861e3",
  measurementId: "G-WB316ZJT30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Vue application
createApp(App).use(router).mount('#app')