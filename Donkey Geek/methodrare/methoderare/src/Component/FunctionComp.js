import React from 'react';

function FunctionComp(props) {
         console.log('%c redner() du pureComponent enfant simple !','color:purple;');
   return(
      <div>
         <p>
            <span className='purple'>FunctionComponent</span>
            {props.name}
         </p>
      </div>
   )
}
export default React.memo(FunctionComp);