import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtVmqkfMzNQISOmWA05kNPe3ghsZf2C_Y",
  authDomain: "frontend-e1581.firebaseapp.com",
  projectId: "frontend-e1581",
  storageBucket: "frontend-e1581.appspot.com",
  messagingSenderId: "1065932053713",
  appId: "1:1065932053713:web:d927a9326623f3835579f0",
  measurementId: "G-Q1CJ82RYVJ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth };