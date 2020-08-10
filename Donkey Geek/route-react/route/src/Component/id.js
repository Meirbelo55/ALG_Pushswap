import React,{ Component } from "react"
import axios from 'axios'
import Profilimg from '../profil.png'
class Id extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        const data = this.props.match.params.id;

        let payload = {
            token: "c83O6w508NRwHlylruIa5w",
            data: {
                name: "nameFirst",
                email: "internetEmail",
                phone: "phoneHome",
                _repeat: 10
            }
        };
        axios({
            method: "post",
            url: "https://app.fakejson.com/q",
            data: payload
        }).then(resp => {
            this.setState({
             data: resp.data[data]
            })
        });
    }
    render() {
        const{name,email,phone} = this.state.data;
        return (
            <div className="container mt-3">
                <h1>Profil id</h1>
                <img src={Profilimg} alt={"profil"}/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Name :</strong> {name}</li>
                    <li className="list-group-item"><strong>Email :</strong> {email}</li>
                    <li className="list-group-item"><strong>Tel :</strong> {phone}</li>

                </ul>
                </div>
        )
    }
}
export default Id;