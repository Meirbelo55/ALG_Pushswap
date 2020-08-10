import React, {Component} from "react";
import Css from './picture/css3.png';
import Js from './picture/javascript.png';
import  reactjs from './picture/reactjs.png';
import Laravel from './picture/laravel.png';
import  PHP from './picture/php.png';
import Symphony from './picture/symfony.png';
class Competences extends  Component {
    render() {
        return(
            <div>
                <h1>Mes Competences</h1>
                <div>
                    <img src={Css}/>
                    <img src={reactjs}/>
                    <img src={Js}/>
                    Html5/Css3/(bootstrap,sass)
                </div>
            </div>
        )
    }
}
export default Competences;