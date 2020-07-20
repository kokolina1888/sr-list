import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdyatDFn9wxITHtMHCAl17HjpV4jCstT4",
  authDomain: "sr-list-ccafe.firebaseapp.com",
  databaseURL: "https://sr-list-ccafe.firebaseio.com",
  projectId: "sr-list-ccafe",
  storageBucket: "sr-list-ccafe.appspot.com",
  messagingSenderId: "172370867490",
  appId: "1:172370867490:web:0834de485925ff74d5a17b",
};
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseRecipes = firebaseDB.ref("recipes");
// const firebaseUsers = firebaseDB.ref("users");

export { firebase, firebaseDB, firebaseRecipes };
