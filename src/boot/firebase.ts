import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDsEhrxAMtxhZLI6mkdUg740hvjvAWTH0A',
  authDomain: 'tvvitter-1e96a.firebaseapp.com',
  projectId: 'tvvitter-1e96a',
  storageBucket: 'tvvitter-1e96a.appspot.com',
  messagingSenderId: '864865309923',
  appId: '1:864865309923:web:90b71692f4239f1acf61d6',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
