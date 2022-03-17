import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {getFirestore,collection,doc,setDoc,initializeFirestore} from "firebase/firestore"


const firebaseConfig = {

    apiKey: "AIzaSyBnfq3VDqaFNtRzBQltFgxJFNmAjAwZ9jw",
    authDomain: "redwire-c56f6.firebaseapp.com",
    databaseURL: 'https://redwire-c56f6.firebaseio.com',
    projectId: "redwire-c56f6",
    storageBucket: "redwire-c56f6.appspot.com",
    messagingSenderId: "732670135675",
    appId: "1:732670135675:web:58844e97d44d6d2ecd01de",
    measurementId: "G-0L0REE4DT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const userCollection = getFirestore()


export {
    userCollection,
    auth,
}

