import React, {Component} from "react";
import Cv from "./CV-Meir_belaich/CV_Belaich_meir.pdf";
class Coordonnes extends  Component {
    render() {
        return(
            <div>
                <div>
                 Coordonnes
                <h4>Nom: Belaich Meir</h4>
                    <h4>E-mail: meir.belaich@epitech.eu</h4>
                    <h4>Tél : 0766566458</h4>
                    <h4>Adresse: 21 Boulevard albert Camus</h4>
                    <h4>Code Postal: 95200</h4>
                    <h4>Ville: Sarcelles</h4>
                </div>
                <div className='about-profile-cv'>
                    <a
                        className='waves-effect waves-light btn-large pulse purple'
                        href={Cv}
                        target='__blank'
                        rel='noopener noreferrer'
                        download>
                        Télecharger mon CV
                    </a>
                </div>
            </div>
        )
    }
}
export default Coordonnes;