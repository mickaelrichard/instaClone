import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const config = {
  apiKey: "AIzaSyADfW6oM5IgFn1ZndO27yAsR8zJ8DC6YaU",
  authDomain: "blog-project-8b942.firebaseapp.com",
  projectId: "blog-project-8b942",
  storageBucket: "blog-project-8b942.appspot.com",
  messagingSenderId: "431513203077",
  appId: "1:431513203077:web:6ae72ba48a8a8a002694ec",
};

firebase.initializeApp(config);
const { FieldValue } = firebase.firestore;
// console.log(firebase);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, FieldValue, projectStorage, projectFirestore, timestamp };
