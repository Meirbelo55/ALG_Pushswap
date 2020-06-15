import React, { Component } from 'react';
//the condition 
class Result extends Component {
   state = {
      name: ' mario',
      winner : true
   }
   render() {
     return (
     this.state.winner ? (<h1>Bravo{this.state.name}</h1>) : '(<h1>rate{this.state.name}</h1>)'
     )
   }
   //for the trenaire you can replace the false by '' or relplace  ? by && if you want just the part true
}
export  default Result;