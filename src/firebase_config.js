import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBQuVM-GpYs3jdSSgabaXzBxmL7hRt5Mk4",
    authDomain: "todoapp-dd82b.firebaseapp.com",
    projectId: "todoapp-dd82b",
    storageBucket: "todoapp-dd82b.appspot.com",
    messagingSenderId: "893492427529",
    appId: "1:893492427529:web:27216cdb5571faac3331d8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };