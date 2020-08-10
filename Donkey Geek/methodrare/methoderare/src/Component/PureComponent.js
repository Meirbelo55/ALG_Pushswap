import React, { Component, PureComponent } from 'react';

class PureComp extends PureComponent {
   render(){
      console.log('%c redner() du pureComponent enfant simple !','color:green;');
         return(
            <div> 
               <span className="green">PureComponent</span>
               {this.props.name}
            </div>
         )
   }
}
export default PureComp;