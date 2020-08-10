import React from 'react';
import './App.css';
import ApiAdress from "./Component/Api";
import Position from "./Component/location";

function App() {
  return (
    <div className="App">
      <h1>notre derniere article : </h1>
        <ApiAdress />
        <Position />
    </div>
  );
}

export default App;
