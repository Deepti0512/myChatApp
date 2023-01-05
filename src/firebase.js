import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAoR8AMpLe6dMU29z1YJC18PMrrujtR8hs",
  authDomain: "chatapp-4431c.firebaseapp.com",
  projectId: "chatapp-4431c",
  storageBucket: "chatapp-4431c.appspot.com",
  messagingSenderId: "570033881021",
  appId: "1:570033881021:web:a00ddc4394733cdd25dcd4"
};

// using another database (same issue persist)
// const firebaseConfig = {
//   apiKey: "AIzaSyDO2ALC98-HqnyUEIUh_48oNN6x7mLeCOY",
//   authDomain: "mychatapp-5204d.firebaseapp.com",
//   projectId: "mychatapp-5204d",
//   storageBucket: "mychatapp-5204d.appspot.com",
//   messagingSenderId: "663727171771",
//   appId: "1:663727171771:web:6a493a86cc34deffa9e19e"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()