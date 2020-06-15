import React, { Component } from 'react';
import Car from '../Car';
import './css/myCss.css';
import MyHead from './myHeaderOne';
import styles from './css/myCss.module.css';
import styled from 'styled-components';

const Titre = styled.h1`
 color: red;
 font-size: 40px;
`
const Boutton = styled.button`
background-color: yellow;
color:#ffffff;
padding: 12px 13px;
font-size:15px;
`

class Form extends Component {
   state = {
      username: '',
      color: '',
      colors:['','red','blue','pink','green'],
      comment: ''
   }
   handlePseudo = e => {
         this.setState({
            username: e.target.value
         })
   }

   handleColor = e => {
      this.setState({
         color : e.target.value
      })
   }
   handleComment = e => {
      this.setState({
         comment: e.target.value
      })
   }
   handleSubmit = e => {
      e.preventDefault();
     console.log(`Username: ${this.state.username} couleur:${this.state.color} commentaire: ${this.state.comment}`)
   }

   render() {
      //const myClass =  this.props.head ? ('blue') :('red');
      return(
            <div>
            <MyHead />
               <Car color={this.state.color} height="200"/>
                  <h1 className={styles.green}>mon paragraphe</h1>
                  <p className='red'>i am paragraphe</p>
                  <Titre>j'importe bootstrapp</Titre>
                  <Boutton>valider</Boutton>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label>Pseudo</label>
            <input  type="text" value={this.state.username} onChange={this.handlePseudo}/>
            </div>
            <div>
               <label>Couleur</label>
               <select value={this.state.color} onChange={this.handleColor}>
                 {this.state.colors.map((color,id) => {
                    return <option key={id} value={color}>{color}</option>
                 })}
               </select>
            </div>
            <div>
               <label>commentaire</label>
               <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
            </div>
            <button >valider</button>
         </form>
      </div>
      )
   }
}
export default Form;