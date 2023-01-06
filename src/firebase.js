import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO2ALC98-HqnyUEIUh_48oNN6x7mLeCOY",
  authDomain: "mychatapp-5204d.firebaseapp.com",
  projectId: "mychatapp-5204d",
  storageBucket: "mychatapp-5204d.appspot.com",
  messagingSenderId: "663727171771",
  appId: "1:663727171771:web:6a493a86cc34deffa9e19e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()