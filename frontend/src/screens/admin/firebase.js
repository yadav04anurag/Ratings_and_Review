import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCnXu3cv-lY6bIdsBhF7Gc-s_grBzLnvYo",
  authDomain: "product-helper-13917.firebaseapp.com",
  projectId: "product-helper-13917",
  storageBucket: "product-helper-13917.appspot.com",
  messagingSenderId: "47051221772",
  appId: "1:47051221772:web:8c87d50e33273e82423729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);