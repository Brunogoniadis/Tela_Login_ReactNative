import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCytLr0l1KxT5iBEuMKSqPNhIiy0wgIFcg",
    authDomain: "meuapp-8ad2a.firebaseapp.com",
    databaseURL: "http://meuapp-8ad2a-default-rtdb.firebaseio.com",
    projectId: "meuapp-8ad2a",
    storageBucket: "meuapp-8ad2a.appspot.com",
    messagingSenderId: "613356783570",
    appId: "1:613356783570:web:29afadae8777d86e9d6a0b",
    measurementId: "G-QPHHPGFZWS"
  };
  

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;