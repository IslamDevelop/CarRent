import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyCrrUf1ub3xbIh9NOoMyHIMRvtlYpT4NA4",
    authDomain: "carrent-d712d.firebaseapp.com",
    projectId: "carrent-d712d",
    storageBucket: "carrent-d712d.appspot.com",
    messagingSenderId: "672391030058",
    appId: "1:672391030058:web:157fb2039beefe5eb1ea53",
    measurementId: "G-R6WXZFEKFE",
    databaseUrl: "https://carrent-d712d-default-rtdb.firebaseio.com/"
   };

   export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getDatabase(app)
 