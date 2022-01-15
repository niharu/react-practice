import axios from "axios";

import { initializeApp } from "firebase/app";
import { collection, addDoc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { getFirestore, getDocs, updateDoc,doc } from "firebase/firestore"

const todoDataUrl = "http://localhost:3100/todos";

const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

export const getAllTodosDataFirebase = async () => {
  const querySnapShot = await getDocs(collection(db, "todos"));
  querySnapShot.forEach((doc) => console.log(doc.id, doc, doc.data()));
  const todoList = querySnapShot.docs.map((doc) => doc.data());
  return todoList;
};

export const addTodoData = async (todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const addTodoDataFirebase = async (todo) => {
  // try {
  //   const docRef = await addDoc(collection(db, "todos"), 
  //     todo
  //   );
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  // return todo;
  await setDoc(doc(db, "todos", todo.id), todo);
  return todo;
};

export const deleteTodoData = async (id) => {
  await deleteDoc(doc(db, "todos", id));
  return id;
};

export const updateTodoData = async (id, todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
};

export const updateTodoDataFirebase = async (id, todo, done) => {
  const docRef = doc(db, "todos", id);
  // await updateDoc(docRef, {done: !done});
  await updateDoc(docRef, todo);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};