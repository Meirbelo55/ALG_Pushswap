import React, {Component} from 'react';
import gokuimg from  './goku.png';
import vegetaimg from "./vegeta.png";
import paintball from "./paintball.jpg";
import handleClick from "./handleClick";
class Goku extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {hits,addOne,name} = this.props;
        const {backGround , clickHandler} = this.props;
        return(
            <div className={`col ${backGround}`}>
                <img  onClick={clickHandler} src={gokuimg} alt='goku'/> <br/>
                <button onClick={addOne} className='btn btn-success m-3'>{name} frappe</button>
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
export default Goku;