 import React, {Component} from "react";
 import Friezaimg from './frieza.png'
 import gokuimg from "./goku.png";
import handleClick from "./handleClick";
 class Frieza extends Component {
    render() {
        const {backGround , clickHandler} = this.props;
        return(
            <div className={`col ${backGround}`}>
                <img  onClick={clickHandler} src={Friezaimg} alt='Friezaimg'/>
            </div>
        )
    }
}
export  default  handleClick(Frieza);