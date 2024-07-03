import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7AXVN_F9lRkBnMUtRPfZwJGgLGN2RR-w",
  authDomain: "emart-fdcc1.firebaseapp.com",
  projectId: "emart-fdcc1",
  storageBucket: "emart-fdcc1.appspot.com",
  messagingSenderId: "233540520920",
  appId: "1:233540520920:web:9098b08ad78d032a2f00ad",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)

const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

const logOut = () => signOut(auth)

const addData = (tableName, data) => addDoc(collection(db, tableName), data)

const getDataWhere = (tableName, column, operator, value) =>
  getDocs(query(collection(db, tableName), where(column, operator, value)))

export { registerUser, loginUser, logOut, addData, getDataWhere }

export default app
