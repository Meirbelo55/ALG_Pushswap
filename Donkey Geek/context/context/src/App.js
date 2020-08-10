import React, {Component} from 'react';
import './App.css';
import First from "./Component/firstComponent";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                name: 'meir',
                age: 21
            }
        }
    }
    render()
    {
        return (
            <div>
                i'm app.js
                <First info={this.state.user}/>
            </div>
        );
    }
}
export default App;
