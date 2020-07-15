import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyA159fELtOtj0kXE4UsAa6RTBb1Zejskm8",
  authDomain: "react-practice-c41c2.firebaseapp.com",
  databaseURL: "https://react-practice-c41c2.firebaseio.com/",
  projectId: "react-practice-c41c2",
  storageBucket: "react-practice-c41c2.appspot.com",
  messagingSenderId: "985293111088",
};

var fireapp;
try {
  fireapp = firebase.initializeApp(config);
} catch (error) {
  console.log(error.message);
}
export default fireapp;


const initial = {
  login:false,
  username:'(click here!)',
  email:'',
  data:[],
  items:[]
}

function fireReducer (state = initial, action){
  switch (action.type){
    case 'UPDATE_USER':
      return action.value;
    default:
      return state;
  }
}

export function initStore(state = initial){
  return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}
