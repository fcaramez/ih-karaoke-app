import firebaseConfig from "../config/firebase.config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addRequest = async (songName, performers, name) => {
  try {
    await addDoc(collection(db, "requests"), {
      songName,
      performers,
      createdAt: serverTimestamp(),
      requestedBy: name,
    });
  } catch (error) {
    console.log(error);
  }
};

const getRequests = async () => {
  try {
    const docs = await getDocs(collection(db, "requests"));
    const clean = docs.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return clean;
  } catch (error) {
    console.log(error);
  }
};

const deleteRequest = async (id) => {
  try {
    const requestDoc = doc(db, "requests", id);
    await deleteDoc(requestDoc);
  } catch (error) {
    console.log(error);
  }
};

export { db, addRequest, deleteRequest, getRequests };
