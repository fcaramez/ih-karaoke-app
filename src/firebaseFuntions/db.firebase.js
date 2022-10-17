import firebaseConfig from "../config/firebase.config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  where,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addRequest = async (songName, performers, userId, callback) => {
  try {
    await addDoc(collection(db, "requests"), {
      songName,
      performers,
      userId,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRequest = async (performers) => {
  try {
    const requestDoc = doc(db, "requests", performers);
    console.log(requestDoc);
    await deleteDoc(requestDoc);
  } catch (error) {
    console.log(error);
  }
};

export { db, addRequest, deleteRequest };
