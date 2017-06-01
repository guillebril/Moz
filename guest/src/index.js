import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBTiGB3o_EzPxEIEBcDkaZVpWRgfdNQYOM",
  authDomain: "mozo-c1716.firebaseapp.com",
  databaseURL: "https://mozo-c1716.firebaseio.com",
  projectId: "mozo-c1716",
  storageBucket: "mozo-c1716.appspot.com",
  messagingSenderId: "1094461273343"
}
firebase.initializeApp(config);
ReactDOM.render(
  <App/>, document.getElementById('root'));
