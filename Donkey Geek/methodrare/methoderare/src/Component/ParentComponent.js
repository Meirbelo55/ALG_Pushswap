import React, { Component } from 'react';
import SimpleComposant from './SimpleComponent';
import PureComp from './PureComponent';
import FunctionComp from './FunctionComp';
class ComposantParent extends Component {

constructor(props) {
   super(props)
   this.state = {
      name : 'spiderman'
   }
}
   shouldComponentUpdate(nextProps,nextState) {
      console.log('je suis dans souldcomponent par defaut return true');
      console.log(this.state.name);
      console.log(nextState)
      
      //if(this.state.name !== nextState.name) {
       //  return true;
      //}
         return true;
   }
   changePower = () => {
      this.setState({
         name :'batman'
      })
   }

   render() {
      console.log('%c RENDER() DU COPOSANT PARENT','color:red;')
      return (
         <div>
            <SimpleComposant  name={this.state.name}/>
            <PureComp  name={this.state.name}/>
            <FunctionComp name={this.state.name}/>
            <strike>meir</strike>
            <button onClick={this.changePower}>changer en btman</button>
      <span className="red">PARENT Component :</span>
      {this.state.name}
         </div>
      )
   }
}
export default ComposantParent;