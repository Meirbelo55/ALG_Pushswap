import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Modal extends Component{
constructor(props){
   super(props);
   this.popUp = document.createElement('div');
    this.body  = document.body.appendChild(this.popUp)
}
componentWillUnmount() {
      document.body.removeChild(this.popUp)
   }


   render() {
      return ReactDOM.createPortal(
      <div className='modal' onClick={this.props.close}>
         <div>
           
         <button>fermer</button>
         </div>
      </div>,
      this.popUp
      )
   }
}
export default Modal;