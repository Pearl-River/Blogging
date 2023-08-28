import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAp6aDGhZ6lZQoHJnRIWy-aprZs3_D8OVQ",
  authDomain: "blogging-9eb03.firebaseapp.com",
  projectId: "blogging-9eb03",
  storageBucket: "blogging-9eb03.appspot.com",
  messagingSenderId: "201114792111",
  appId: "1:201114792111:web:4410859edf2917ba6ea45a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
