import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMP7SvRBWfVXGU2gnEisTiU222Aw7SiTY",
  authDomain: "front-end-lvl-3.firebaseapp.com",
  databaseURL: "https://front-end-lvl-3-default-rtdb.firebaseio.com",
  projectId: "front-end-lvl-3",
  storageBucket: "front-end-lvl-3.appspot.com",
  messagingSenderId: "257545624222",
  appId: "1:257545624222:web:b5c2e2c727739561bff98f",
  measurementId: "G-6SEVPMNLYR",
};

export default firebaseConfig;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
