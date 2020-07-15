import React,{ Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyA159fELtOtj0kXE4UsAa6RTBb1Zejskm8",
  authDomain: "react-practice-c41c2.firebaseapp.com",
  databaseURL: "https://react-practice-c41c2.firebaseio.com/",
  projectId: "react-practice-c41c2",
  storageBucket: "react-practice-c41c2.appspot.com",
  messagingSenderId: "985293111088",
};

firebase.initializeApp(config);

class App extends Component {

  render(){
    return(
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}

export default App;
