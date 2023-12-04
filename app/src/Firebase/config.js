import {initializeApp } from 'firebase/app';
import {
    collection,getFirestore
}from 'firebase/firestore'

//config
const firebaseConfig = {
    apiKey: "AIzaSyCM14q8v---ofJDGYNK-aiVlvOvI3cx9D0",
    authDomain: "courses-website-project.firebaseapp.com",
    projectId: "courses-website-project",
    storageBucket: "courses-website-project.appspot.com",
    messagingSenderId: "756467395461",
    appId: "1:756467395461:web:8130d4476c0e9c814672ec"
  };


//initialize firebase
const app=initializeApp(firebaseConfig);

//connect fireStore
const db=getFirestore(app);

//collection Ref
const coursesRef=collection(db,'courses');
const usersRef=collection(db,'users');


export const courses = coursesRef
export const users=usersRef
