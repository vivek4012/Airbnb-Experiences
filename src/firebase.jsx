// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
 import { useEffect ,useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO6FG2MJSO1EW4kCY2LcFtKdjacdpv3qU",
  authDomain: "airbnb-auth-599df.firebaseapp.com",
  projectId: "airbnb-auth-599df",
  storageBucket: "airbnb-auth-599df.appspot.com",
  messagingSenderId: "534967305097",
  appId: "1:534967305097:web:70b9da51d714f35fe7d758",
  measurementId: "G-537PZB6L90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
 
export function signup(email,password){
  return   createUserWithEmailAndPassword(auth,email,password)
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}


export function useAuth (){
    const [user,setuser]= useState()
    useEffect(()=>{
     const unsub=   onAuthStateChanged(auth, user=>{setuser(user)})
     return unsub
    },[])
    return user
}