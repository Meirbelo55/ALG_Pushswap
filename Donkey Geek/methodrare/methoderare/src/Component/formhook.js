import React, {useState} from 'react';

const Form = ({addTodo}) => {

   const [value,setValue] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
      addTodo(value);
      console.log(value);
   }
   return (
      <form onSubmit={handleSubmit}>
         <input type ='text' onChange={e =>setValue(e.target.value)}/>
         <button>Envoyer</button>
      </form>
   )
}
export default  Form;