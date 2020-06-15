import React , { Component } from 'react';
 class CycleComponent extends Component {

   constructor(props) {

      super(props)
         this.state = {
            name : 'toto',
            step : 1
      }
      console.log(`Etape ${this.state.step}: je  suis ds le contructor()`);
   }

   componentDidMount() {
      console.log(`Etape ${this.state.step}:je suis ds component didmont`);
      this.setState({
         name : this.props.name,
         step : this.state.step +1
      })
            console.log(`Etape ${this.state.step}:ce state a changer ds le compoentdidmount`);

   }

      componentDidUpdate(prevProps,prevState) {

            console.log(`Etape ${this.state.step}:je suis ds le compenent update`);
            console.log(prevState);
            console.log(this.state);
      }

      componentWillUnmount (){
         console.log('je suis ds la method de componenet de demontage de composant')
      }

   render() {
      console.log(`${this.state.step}: je suis ds le render`)
      return(
         <div className='bordure'>
            {console.log(`etape ${this.state.step}:maj du dom`)}
            <p>chargment de la page : {this.state.step}</p>
            <p>your name: {this.state.name}</p>
         </div>

      )
   }
}
export default CycleComponent;