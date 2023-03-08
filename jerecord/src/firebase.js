// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAHfq6Jj9E3oxDSTYO8mMTaAuu4WUV4ZE8",
  authDomain: "jchat-app-e4516.firebaseapp.com",
  projectId: "jchat-app-e4516",
  storageBucket: "jchat-app-e4516.appspot.com",
  messagingSenderId: "4801093806",
  appId: "1:4801093806:web:677d31f601d40c9f428d3f",
  measurementId: "G-GW9HXYSDSF"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()