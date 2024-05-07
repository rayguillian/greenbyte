import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App'; // corrected path
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import '../styles/index.css'; // corrected path

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4PR-VdThhuwiceifhYSnFPrdCTTg-ivE",
  authDomain: "greenbyte-7cb53.firebaseapp.com",
  projectId: "greenbyte-7cb53",
  storageBucket: "greenbyte-7cb53.appspot.com",
  messagingSenderId: "1064711894829",
  appId: "1:1064711894829:web:297268f393c484443585a4",
  measurementId: "G-SYEV67ZBN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create a root container in which to render the app
const root = document.getElementById('app');

// Render the App component into the root container
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
