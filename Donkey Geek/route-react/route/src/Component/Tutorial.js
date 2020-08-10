import React from 'react';
import '../App.css';

const Tutorial  = (props) => {

   setTimeout(()=> {
      props.history.push('/')
   },5000)

   return(
      <div  className='container mt-3'>
       <div className="alert alert-warning alert-dismissible fade show" role="alert">
         <strong>Oup's,</strong> this page is under construction...
        you will be redirect to the homePage  in 5 second
         <button type="button" className="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">&times;</span>
         </button>
   </div>
         <h1>Tutorial</h1>
      </div>
   )
}
export default Tutorial;