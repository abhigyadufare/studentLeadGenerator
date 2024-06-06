// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const initializeApp = require('firebase/app');
const getAnalytics = require('firebase/analytics');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_QO94DVwJqFWe9wIUPCVrPERFMaVGUiQ",
  authDomain: "student-lead-generator.firebaseapp.com",
  projectId: "student-lead-generator",
  storageBucket: "student-lead-generator.appspot.com",
  messagingSenderId: "343345786440",
  appId: "1:343345786440:web:f627770e7d0969760d727d",
  measurementId: "G-101XNL8VWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.exports = app;