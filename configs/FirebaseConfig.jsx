import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD09JDTzx90dk6PpSxNGkfG3WzBVEQ3438",
  authDomain: "real-estate-mern-app-1f89a.firebaseapp.com",
  projectId: "real-estate-mern-app-1f89a",
  storageBucket: "real-estate-mern-app-1f89a.appspot.com",
  messagingSenderId: "48418 4520674",
  appId: "1:484184520674:web:162a3e90f826cbba036bbb"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)