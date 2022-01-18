import { collection, setDoc, getDoc, deleteDoc ,query, where } from "firebase/firestore";
import { getFirestore, getDocs, updateDoc,doc } from "firebase/firestore"

const db = getFirestore();

export const getAllTodosDataFirebase = async (user) => {
  if (user===null) {
    return [];
  }

  const q = query(collection(db, "todos"), where("userId", "==", user.uid));
  const querySnapShot = await getDocs(q);
  const todoList = querySnapShot.docs.map((doc) => doc.data());
  return todoList;
};

export const addTodoDataFirebase = async (todo) => {
  await setDoc(doc(db, "todos", todo.id), todo);
  return todo;
};

export const deleteTodoData = async (id) => {
  await deleteDoc(doc(db, "todos", id));
  return id;
};

export const updateTodoDataFirebase = async (id, todo, done) => {
  const docRef = doc(db, "todos", id);
  await updateDoc(docRef, todo);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};