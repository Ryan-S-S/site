import { db } from "./firebase-config.js";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

async function salvarDados() {
    await setDoc(doc(db, "usuarios", "123"), {
        nome: "João",
        idade: 25
    });
    console.log("Dados salvos!");
}

async function lerDados() {
    const docSnap = await getDoc(doc(db, "usuarios", "123"));
    if (docSnap.exists()) {
        console.log("Dados:", docSnap.data());
    } else {
        console.log("Documento não encontrado!");
    }
}

salvarDados();
lerDados();
