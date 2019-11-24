import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render(){
    var courses = [
      { name: 'Complete i0S10 dev course', price: 199},
      { name: 'Complete pentesting course', price: 299},
      { name: 'Complete front end dev course', price: 180},
      { name: 'Complete web app pentesting', price: 190},
      
  ]
    return(
      <div className="Main-page">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h2> Welcome to Marisa's Ecommerce Page </h2>
      </header>
      <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
