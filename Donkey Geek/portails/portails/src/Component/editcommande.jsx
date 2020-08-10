import React,{Component} from 'react';

class Edit extends Component {
   constructor(props) {
      super(props);
   }

      state = {
         name:'',
         firstname:'',
         adress : '',
         ville : '',
         codePostal: '',
         idContry : ''
      }
      handleName = e => {
         this.setState({
            name : e.target.value,
         })
      }
  
      handleAdress = e => {
         console.log(e.target.value)
         this.setState({
            adress : e.target.value,
         })
      }
      
        handleFirstName = e => {
         console.log(e.target.value)
         this.setState({
            firstname : e.target.value,
         })
      }

      handleCity = e => {
         console.log(e.target.value)
         this.setState({
            ville : e.target.value,
         })
      }
      handleCodePostal = e => {
         console.log(e.target.value)
         this.setState({
            codePostal: e.target.value,
         })
      }
      onSubmit(e) {
        e.preventDefault();
        const userChangeCommand = {
           name: this.state.name,
           firstname: this.state.firstname,
           adress : this.state.adress,
           ville : this.state.ville,
           codePostal: this.state.codePostal,
           idContry : this.state.idContry
        } 
        console.log(userChangeCommand)
      }
      
   render() {
      return(
         <div>
            <form onSubmit={this.onSubmit}>

            <label>nom</label>
            <input type='text' name='name' onChange={this.handleName}/>

            <label>prenom</label>
            <input type='text' name='prenom' onChange={this.handleFirstName}/>

            <label>adresse</label>
            <input type="text" name='adress' onChange={this.handleAdress}/>

            <label>Ville</label>
            <input type="text" name='ville' onChange={this.handleCity}/>

            <label>Code Postal</label>
            <input type="number" name='CodePostal' onChange={this.handleCodePostal}/>
               <button>valider</button>

          </form>
         </div>
      )
   }
}
export default Edit;