import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA21j-x9ROmQQPmNCuc3L0x5VkJHX6GSoc",
  authDomain: "dnsr-nextfire.firebaseapp.com",
  projectId: "dnsr-nextfire",
  storageBucket: "dnsr-nextfire.appspot.com",
  messagingSenderId: "368051720387",
  appId: "1:368051720387:web:c8fc1c5fa18014a7a2d276",
  measurementId: "G-BNNDENPKBC",
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
