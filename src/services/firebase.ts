import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNc4PL90T1AkOK3nBS4AwibbooUvL2_JA",
  authDomain: "auth-fr-c024a.firebaseapp.com",
  projectId: "auth-fr-c024a",
  storageBucket: "auth-fr-c024a.appspot.com",
  messagingSenderId: "424613557779",
  appId: "1:424613557779:web:671b2072ca2c28de20f1e6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);