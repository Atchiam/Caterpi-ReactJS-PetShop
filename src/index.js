import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQi_gsV-juet2goSO58a1w5MJZvPmxroY",
    authDomain: "caterpi-petshop.firebaseapp.com",
    projectId: "caterpi-petshop",
    storageBucket: "caterpi-petshop.appspot.com",
    messagingSenderId: "325868771599",
    appId: "1:325868771599:web:7b18cc67c3956ff285067a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

