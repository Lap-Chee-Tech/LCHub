import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyDbZCfpZbI0nEwy9E7MWOy_vhHJD_K-Qs8",
  authDomain: "lchub-dcb73.firebaseapp.com",
  databaseURL: "https://lchub-dcb73.firebaseio.com",
  projectId: "lchub-dcb73",
  storageBucket: "",
  messagingSenderId: "891838461846",
  appId: "1:891838461846:web:1dcc45c7d656f3a0da4fb7"
};

let App = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(App);
