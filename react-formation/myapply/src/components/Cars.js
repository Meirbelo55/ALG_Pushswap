import React from 'react';
const Car = (props) => {
    console.log(props.year)

    const colorInfo = props.color ? (`Couleur :${props.color}`):('couleur introuvable');
    if(props.children) {
    return(
        <tr>
            <td>marque :{props.children}</td>
            <td>Age: {props.year}</td>
            <td>{colorInfo}</td>
        </tr>
    )
}
    else {
 return null;
    }
}
export default Car;