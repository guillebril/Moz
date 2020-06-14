var Rebase = require("re-base");
var firebase = require("firebase");
var app = firebase.initializeApp({
  apiKey: "AIzaSyBEKsKRwtXlF2RU_Ws2A-3Iz4valZubxZ0",
  authDomain: "changonatural.firebaseapp.com",
  databaseURL: "https://changonatural.firebaseio.com/",
  projectId: "changonatural",
  storageBucket: "changonatural.appspot.com",
  messagingSenderId: "1094461273343",
});

var base = Rebase.createClass(app.database());

//Autentico
const auth = base.initializedApp.auth();
auth.onAuthStateChanged((usuario) => {
  if (usuario) {
    //ya esta logueado
    console.log(navigator.userAgent);
    console.log("usuario logueado: ");
    console.log(JSON.stringify(usuario, null, 4));
  } else {
    //no esta logueado
    console.log("usuario NO logueado: ");
    auth.signInAnonymously();
  }
});

export default base;
