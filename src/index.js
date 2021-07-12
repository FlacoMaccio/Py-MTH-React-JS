import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main/Main';
import firebase from 'firebase/app';

import 'firebase/firestore';

const app = firebase.initializeApp ({
  apiKey: "AIzaSyASxaXoyC_PgD3in1RqYPIIR7EqnCfp2Xw",
  authDomain: "py-mth-reactjs.firebaseapp.com",
  projectId: "py-mth-reactjs",
  storageBucket: "py-mth-reactjs.appspot.com",
  messagingSenderId: "402762839458",
  appId: "1:402762839458:web:9ac638d7897d8321d0aefb"

});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}


ReactDOM.render(
  <React.StrictMode>

    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

