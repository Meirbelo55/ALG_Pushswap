import React, {Component} from "react";
import  vegetaimg from './vegeta.png';
import gokuimg  from  './goku.png';
import handleClick from "./handleClick";
class Vegeta extends Component {
        constructor(props) {
            super(props);
        }

    render() {
            const {hits, addOne , name} = this.props;
        const {backGround , clickHandler} = this.props;
        return(
            <div className={`col ${backGround}`}>
                <img  onClick={clickHandler} src={vegetaimg} alt='vegeta' /> <br/>
                <button onClick={addOne} className='btn btn-success m-3'>{name} frappe</button>
                {console.log(this.state)}
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th scope='col'> Coups</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{hits}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Vegeta;