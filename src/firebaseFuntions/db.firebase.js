import firebaseConfig from "../firebase.config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addRequest = async (songName, performers, userId) => {
  try {
    await addDoc(collection(db, "requests"), {
      songName,
      performers,
      userId,
    });
  } catch (error) {}
};

export { db, addRequest };
