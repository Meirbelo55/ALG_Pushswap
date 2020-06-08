import React, { Component,Fragment} from 'react';
import Car from './Cars';
class Mycars extends Component {
    state= {
    voitures : [
        {name:'ford',color:'red',year:'2000'},
        {name:'mercos',color:'black',year:'2010'},
        {name:'peugeot',color:'green',year:'2018'}
    ],
        titre: 'mon catalogue de voitutres 2'
    }

   addStyle = (e)=> {
     if(e.target.classList.contains('styled')) {
         e.target.classList.remove('styled')
     }
     else {
         e.target.classList.add('styled')
     }
}
    addYears = () => {
     const updateState = this.state.voitures.map((data)=> {
         return data.year -= 10;
     });
        this.setState({
            updateState
        })
    }

    render()    {
        const year  = new Date().getFullYear();

        return (
                <>
                    <h1 onMouseOver={this.addStyle}>{this.state.titre}</h1>
                    <button onClick={this.addYears}> + 10 ans</button>

                    <table>
                        <tr>
                            <th>Marque</th>
                            <th>age</th>
                            <th>Couleur</th>
                        </tr>
                    {
                        this.state.voitures.map((car,  id) => {
                            return(
                                <Fragment key={id}>
                                <Car color={car.color} year={ year - car.year + ' ans'}>{car.name}</Car>
                                </Fragment>
                            )
                        })
                    }
                    </table>
                < />
                
        )
    }
}
export default Mycars;