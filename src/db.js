import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA9219r3X5hiBR3qqDebU_0yoW8ksazv_M",
  authDomain: "bloggerapp-ec547.firebaseapp.com",
  databaseURL: "https://bloggerapp-ec547.firebaseio.com",
  projectId: "bloggerapp-ec547",
  storageBucket: "gs://bloggerapp-ec547.appspot.com",
  messagingSenderId: "538773360486",
  appId: "1:538773360486:web:7a5cedbaa3806da8ff82a7",
});

export const db = firebaseApp.firestore();
export const storageRef = firebaseApp.storage();
