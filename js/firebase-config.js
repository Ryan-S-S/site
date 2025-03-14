import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAggIsjY4M2kGoLO03xr7Nyf-wiIYVAhQs",
    authDomain: "projeto-pessoal-9b18c.firebaseapp.com",
    projectId: "projeto-pessoal-9b18c",
    storageBucket: "projeto-pessoal-9b18c.firebasestorage.app",
    messagingSenderId: "115904751293",
    appId: "1:115904751293:web:44dc24889c95374e4ab9d4"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };