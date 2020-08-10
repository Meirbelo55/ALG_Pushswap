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
     console.log('%c getderive lance','color:red;background:yellow;font-size:30px;');

     console.log(props);
     console.log(state);

     return null;
  }
  shouldComponentUpdate(nextProps,nextState) {
     console.log('je suis ds sould componetupdate')
     return true;
  }

  forceChange = ()=>{
     this.forceUpdate(()=> {
        console.log('i frce the change');
     })

  }

   render() {
      console.log('je suis ds le render')
      return(
         <div>
            <p>nom : {this.state.name}</p>
            <p>age : {this.props.age}</p>
            <button onClick={this.forceChange}>forcer</button>
         </div>
      )
   }
}
export default MyComponent;