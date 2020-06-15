import React,{ Component} from 'react';

class ChildComponent extends Component {

   constructor(props) {
      super(props)
      this.state = {

      }
      console.log('je uis ds le contructor enfant')
   }
   componentDidMount() {
      console.log('je sui ds le component didmount enfant')
      this.setState({

      })
   }

   render() {
         console.log('je suis ds le render enfant')
      return (
         <div>
            {console.log('maj dom() ds composant enfant')}
               salut
         </div>
      )
   }
}
export default ChildComponent;