import React, { Component } from 'react';
import './App.css';
import  CycleComponent from './Component/CycleComponent';
class App extends Component {

   state = {
     display : true
   } 

   deleteOrDisplay = () => {
        this.setState({
          display: !this.state.display
        })
      }

   
  render() {
    const showComponent = this.state.display ? (<CycleComponent name='meir'/>) : (<div></div>);

  return (
    <div className="App">
      {showComponent}
   <button onClick={this.deleteOrDisplay}>clik here please</button>
    </div>
   
  );
}
}
export default App;
