import React, { Component } from 'react';

class MyComponent extends Component {

   constructor(props) {
      super(props)

      this.state = {
         name : 'meir'
      }
      console.log('je suis ds le contructor');
   }

  static getDerivedStateFromProps(props,state) {
     console.log('getderive');
     return null;
  }
   render() {

      return(
         <div>
            hello world
         </div>
      )
   }
}
export default MyComponent;