import React, { Component } from 'react';
import Users from './Singers';
class Display extends Component {

render() {
   return(
      <div>
         <h1>Musicien</h1>
         <Users name="ridsa" age="32"/>
         <Users name="maitre" age="25"/>
         <Users name="david" age="56"/>
         <Users name="jean" age="44"/>
         <p>hii beau goose</p>
      </div>
   )
}
}
export default Display;