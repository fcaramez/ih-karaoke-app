import firebaseConfig from "../config/firebase.config";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    const user = response.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        displayName: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (displayName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      displayName,
      authProvider: "local",
      email,
      userType: "a",
    });
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const getUserById = async (id) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", id));
    const user = await getDocs(q);
    return user.docs[0].data();
  } catch (error) {
    console.log(error);
  }
};

const checkAdmin = (uid) => {
  return uid === process.env.REACT_APP_ADMIN_ID;
};

/* const isAdmin = async (uid) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", uid));
    const user = await getDocs(q);
    return user.docs[0].data();
  } catch (error) {
    console.log(error);
  }
}; */

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    //alert("Password reset link sent!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  getUserById,
  checkAdmin,
};
