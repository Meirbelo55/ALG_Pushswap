import React, { Component } from "react";
import Toto from "./toto";
class Mom extends  Component {
    state = {
        messageMom: null,
        messageToto: null
    }
    orderMom = () => {
        this.setState({
            messageMom : ' go to your room'
        })
    }

    responseToto = () => {
        this.setState({
            messageToto:  'all right mom'
        })
    }
    render() {
      return(
        <div className='App'>
            <h1>Mom</h1>
            <button onClick={this.orderMom}> ordre of mom</button>
            <p>{this.state.messageMom}</p>
            <hr />
            <Toto name='toto' responseToto={this.responseToto} lestate={this.state}/>
          </div>
      )
    }
}
export default Mom;