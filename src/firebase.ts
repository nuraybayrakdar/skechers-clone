import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyBKeBEl3oTQfY1HhkdUsWPFcAgI3LaCQJA",
  authDomain: "express-sketchers-clone.firebaseapp.com",
  projectId: "express-sketchers-clone",
  storageBucket: "express-sketchers-clone.appspot.com",
  messagingSenderId: "989547087959",
  appId: "1:989547087959:web:026e6118f89ab8e3ddbb12",
  measurementId: "G-1FPYW195CB",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const userCollection = db.collection("Users");

export const createUser = (user: any) => {
  return userCollection.add(user);
};

export const getUser = async (id: any) => {
  const user = await userCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id: any, user: any) => {
  return userCollection.doc(id).update(user);
};

export const deleteUser = (id: any) => {
  return userCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = userCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return users;
};

export const auth = getAuth();
