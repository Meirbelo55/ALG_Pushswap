import  React, {useRef,useEffect, useState, Fragment} from 'react';

const  WelcomePage = () => {
    const refWolverine =  useRef(null);

    const [btn,setbtn] =  useState(false);

    useEffect(()=> {
        refWolverine.current.classList.add("startingImg");
        setTimeout(()=> {
            refWolverine.current.classList.remove("startingImg");
            setbtn(true)
        },1000);
    },[])

     const display =  btn && (
         <Fragment>
            <div className="leftBox">
                <button className="btn-welcome">Inscription</button>
            </div>
            <div className="rightBox">
                <button className="btn-welcome">Connexion</button>
            </div>
         </Fragment>
     )

    return(
       <main ref={refWolverine} className="welcomePage">
           {display}
       </main>
    )
}
export default WelcomePage;