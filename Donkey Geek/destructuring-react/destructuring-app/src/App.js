import React from 'react';
import './App.css';
import Display from './Component/display' 
import Result from './Component/Game';
import Form from './Component/Formulaire/Form';

function App() {
  return (
    <div className="App">
  
      <Result />
      <Display />
      <Form  head={true}/>
    <p>slt</p>
    </div>
  );
}
export default App;
