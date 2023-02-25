import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxka5AS7Ofny2P2JXuQY-uZVOUp-VqvME",
  authDomain: "dovalues-e6672.firebaseapp.com",
  projectId: "dovalues-e6672",
  storageBucket: "dovalues-e6672.appspot.com",
  messagingSenderId: "640558670257",
  appId: "1:640558670257:web:e8e875a3be4aba6b11dd90",
  measurementId: "G-ZD1ERCELBX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

