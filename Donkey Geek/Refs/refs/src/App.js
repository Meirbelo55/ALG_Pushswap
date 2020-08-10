import React, { Component } from 'react';
import './App.css';
import MyRef from './Component/Refs';

class App extends Component {

  constructor(props) {
    super(props)
    this.refComponent = React.createRef();
  }
  handleClick = () => {
    this.refComponent.current.addFocus();
  }
  render() {
  return (
    <div className="App">
     <MyRef ref={this.refComponent}/>
     <button onClick={this.handleClick}>ok</button>
    </div>
  );
}
}

export default App;
