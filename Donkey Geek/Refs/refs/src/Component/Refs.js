import React, {Component} from 'react';

class MyRef extends Component {

   constructor(props) {
      super(props)
      this.state = {
         value: ''
      }
      this.title = React.createRef();
      this.input = React.createRef();
      console.log(this.title);
   }
   update = e => {
      this.setState({
         value: e.target.value
      })
   }
   componentDidUpdate(prevProps,PrevState) {
      this.title.current.style.color = 'red';
   }
   componentDidMount() {
      this.input.current.focus()
   }
   addFocus = () => {
       this.input.current.focus();
 
   }
   handleClick = () => {
      console.log(this.input.current.value);
   }
   render() {
      return(
         <div>
            <h1 ref={this.title}>Valeur: {this.state.value}</h1>
            {/*<input ref={this.input} type='text' value={this.state.value} onChange={this.update}/>*/}
            <input ref={this.input} type='text' />
            <button onClick={this.handleClick}>valider</button>
         </div>
      )
   }
}
export default MyRef;