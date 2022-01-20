import { collection, setDoc, getDoc, deleteDoc ,query, where } from "firebase/firestore";
import { getFirestore, getDocs, updateDoc,doc } from "firebase/firestore"

const db = getFirestore();

export const searchClips = async (category) => {
  if (category===null) {
    return [];
  }

  const q = query(collection(db, "clips"), where("category", "==", category));
  const querySnapShot = await getDocs(q);
  const clips = querySnapShot.docs.map((doc) => doc.data());
  return clips;
};

export const addClip = async (clip) => {
  await setDoc(doc(db, "clips", clip.id), clip);
  return clip;
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