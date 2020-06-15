import  React, { Component } from 'react';
//destrcuturing in use react; 
 class Users extends Component  {
      render()
         {
            const {name,age} = this.props;
         return(
         <div>
            <p> 
               Chanteur : {name}{age}
            </p>
         </div> 
         )
    }
      
 }
 export default Users;