
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCMK6-Ud5WUkFFkG2oeaxHIoBaVrYga1Sg",
  authDomain: "aj-corp-final.firebaseapp.com",
  projectId: "aj-corp-final",
  storageBucket: "aj-corp-final.appspot.com",
  messagingSenderId: "339666563970",
  appId: "1:339666563970:web:3df18081e17a70d63d559b"
};


const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);