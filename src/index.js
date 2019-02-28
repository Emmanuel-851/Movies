import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import firebase from 'firebase'

firebase.initializeApp(
   {
      apiKey: "AIzaSyCIpvZrJhfWlokKcLkoFc88bf4iA78HoSc",
      authDomain: "fir-movies-851.firebaseapp.com",
      databaseURL: "https://fir-movies-851.firebaseio.com",
      projectId: "fir-movies-851",
      storageBucket: "fir-movies-851.appspot.com",
      messagingSenderId: "744346044772"
    }
)

ReactDOM.render(
   <BrowserRouter>
    <App />
   </BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
