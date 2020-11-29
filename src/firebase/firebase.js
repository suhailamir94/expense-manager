import firebase from "firebase";
// import { addExpense } from "../actions/expenses";

const config = {
  apiKey: "AIzaSyBs7r_292ku4DW2zdsULpI7cs43HI3ZUps",
  authDomain: "expensify-72220.firebaseapp.com",
  databaseURL: "https://expensify-72220.firebaseio.com",
  projectId: "expensify-72220",
  storageBucket: "expensify-72220.appspot.com",
  messagingSenderId: "190933501378",
  appId: "1:190933501378:web:c36a76cf23748854bf825b",
  measurementId: "G-VCR5MHEW1Z",
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const startLogin = () => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

const startLogout = () => {
  return firebase.auth().signOut();
};

const addExpenseFirebase = async expense => {
  const ref = await database.ref("expenses").push(expense);
  console.log(ref.key);
  return ref.key;
};

const getAllExpensesFirebase = async () => {
  const expenses = [];
  const snapshot = await database.ref("expenses").once("value");
  snapshot.forEach(childSnapshot => {
    expenses.push({ id: childSnapshot.key, ...childSnapshot.val() });
  });
  console.log(expenses);
  return expenses;
};

const editExpenseFirebase = async ([id, updates]) => {
  await database.ref(`expenses/${id}`).update(updates);
};

const removeExpenseFirebase = async id => {
  await database.ref(`expenses/${id}`).remove();
};
export {
  firebase,
  googleAuthProvider,
  addExpenseFirebase,
  getAllExpensesFirebase,
  editExpenseFirebase,
  removeExpenseFirebase,
  startLogin,
  startLogout,
};
// firebase.analytics();
