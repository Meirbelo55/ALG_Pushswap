import React, { Component } from 'react';
import './App.css';
import MyComponent from './Component/MyComponent';
import ComposantParent from './Component/ParentComponent';
import Affichage from './Component/affichageForm'
import Afichage from './Component/affichageForm';
class App extends Component {
 
  state= {
    age:23
  }

addYear = () => {
  this.setState((prevState) => ({
    age: prevState.age +1
  }))
}

    render() {
      return (
       <div className="App">
         <ComposantParent />
        <MyComponent age={this.state.age}/>
        <button onClick={this.addYear}>changer le props</button>
        <Afichage />
      </div>
      );
    }
}

export default App;
