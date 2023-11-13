// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const all = import.meta.env.VITE_apiKey
console.log(all, 'all');
const firebaseConfig = {
  apiKey: "AIzaSyAVh_pJljsCldWUQdEjwTNmRwEb-9thE9Y",
  authDomain: "bistro-boss-89dd9.firebaseapp.com",
  projectId: "bistro-boss-89dd9",
  storageBucket: "bistro-boss-89dd9.appspot.com",
  messagingSenderId: "227596170070",
  appId: "1:227596170070:web:74d51ec8bdea5d3f151cf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;