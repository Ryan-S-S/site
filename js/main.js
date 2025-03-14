import { db } from "./firebase-config.js";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

async function salvarUsuario(id, nome, idade) {
    await setDoc(doc(db, "usuarios", id), { 
        nome, 
        idade });
    console.log("Usuário salvo:", nome);
}

async function lerDados(id) {
    const docSnap = await getDoc(doc(db, "usuarios", id));
    if (docSnap.exists()) {
        console.log("Dados:", docSnap.data());
    } else {
        console.log("Documento não encontrado!");
    }
}

async function apagarDocumento(id) {
    await deleteDoc(doc(db, "usuarios", id));
    console.log("Documento apagado!");
}

async function listarDocumentos(colecao) {
    const querySnapshot = await getDocs(collection(db, colecao));

    if (querySnapshot.empty) {
        console.log(`A coleção "${colecao}" está vazia.`);
        return;
    }

    console.log(`Documentos na coleção "${colecao}":`);
    querySnapshot.forEach((doc) => {
        console.log(`ID: ${doc.id} →`, doc.data());
    });
}

window.salvar = salvarUsuario;
window.ler = lerDados;
window.apagar = apagarDocumento;
window.listar = listarDocumentos;