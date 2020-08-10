import React from 'react';
import ReactDOM from 'react-dom';
function Component() {
   return ReactDOM.createPortal(
      <div>
         <p>je suis dans root</p>
      </div>,
      document.getElementById('portail-root')
   )
}
export default Component;