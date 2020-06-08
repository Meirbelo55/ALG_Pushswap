import React from "react";

const Toto = props => {
    const buttonResponseToto =  props.lestate.messageMom !== null ? (<button onClick={props.responseToto}>Reponse</button>) : (<button disabled>Reponse</button>)

    return(
        <div>
        <h2>{props.name}</h2>
            {buttonResponseToto}
            <p>{props.lestate.messageToto}</p>
        </div>
    )
}
export default Toto;