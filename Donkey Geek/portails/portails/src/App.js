import React,{Component} from 'react';
import './App.css';
import Modal from './Component/Modal';
import Edit from './Component/editcommande';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal:false
    }
  }
  handleShow = () => {
    this.setState({
      showModal:true
    })
  }
  hanldeHide = () => {
    this.setState({
      showModal:false
    })
  }
  render(){
    const modal = this.state.showModal  && <Modal close={this.hanldeHide}/>
    return(
      <div className='App'>
      <button onClick={this.handleShow}>afficher le model</button>
      {modal}
      </div>
    )
  }
}
 
export default App;
