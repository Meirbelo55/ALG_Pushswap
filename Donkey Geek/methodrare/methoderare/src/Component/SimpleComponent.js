import React, { Component } from 'react';

class SimpleComposant extends Component {
   render() {
      console.log('%c render() du composant enfant', 'color:pink;')

      return (
         <div>
                  <span className="blue">simpleComponent : </span>
                  {this.props.name}

         </div>
      )
   }
}
export default SimpleComposant;