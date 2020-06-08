import React, { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Mom from "./components/Mom";

 class App extends Component {

   render() {
      return (
    <div className="App">
    <Mycars/>
    <Mom />
    </div>

  );
   }
 
}
export default App;
