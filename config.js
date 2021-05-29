import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBIQ6jL-Z-UTTTp95soMZ6Jm4VNMmH__Tk",
  authDomain: "breath-india.firebaseapp.com",
  projectId: "breath-india",
  storageBucket: "breath-india.appspot.com",
  messagingSenderId: "12533387914",
  appId: "1:12533387914:web:57d1d027854f5832601373"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();