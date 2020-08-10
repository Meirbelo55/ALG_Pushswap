import React, {Component, Fragment} from "react";

 class addHits extends Component{
  constructor(props) {
   super(props);

   this.state = {
    hits: 0
   }
  }
  addOne = () => {
   this.setState(prevState => {
    return {
     hits: prevState.hits + 1
    }
   })
  }
  render() {
   return(
       <div>
        {this.props.render(this.state.hits, this.state.addOne)}
       </div>
   )
  }

 }
 export  default addHits;