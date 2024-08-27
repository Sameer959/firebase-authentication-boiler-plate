import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "api key",
  authDomain: "auth domain key"
  projectId: "project id key"
  storageBucket: "storage bucket key"
  messagingSenderId: "messaging sender id key"
  appId: "1:1065932053713:web:"app_id key"
  measurementId: "measurement_id key"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth };
