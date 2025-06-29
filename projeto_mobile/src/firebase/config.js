/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJu4hsA5KGBxEQNq4TYEqIRYOOtry8Ru8",
  authDomain: "prog-mobile-es47a.firebaseapp.com",
  projectId: "prog-mobile-es47a",
  storageBucket: "prog-mobile-es47a.firebasestorage.app",
  messagingSenderId: "160711513967",
  appId: "1:160711513967:web:02330c27e2d6a01bf03a9a",
  measurementId: "G-YSF97729Z2"
};

const app = initializeApp(firebaseConfig);
const auth_module = getAuth(app);

export { app, auth_module };