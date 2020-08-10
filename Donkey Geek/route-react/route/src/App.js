import React from 'react';
import Docs from './Component/Docs';
import Tutorial from'./Component/Tutorial';
import Community from './Component/Community';
import Menu from './Component/Menu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import Error from './Component/Error404.js';
import Id from './Component/id';
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
           underConst: {
               Docs:false,
               Tutorial: true,
               Community: false
           }
        }
    }
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Menu/>
                        <Switch>
                             <Route exact path = "/" component = {Docs}/>
                             <Route path="/tutorial" component={Tutorial}/>
                             <Route strict path = "/community" component = {Community} />
                            <Route path="/users/:id" component={Id}/>
                            <Route component = {Error}/>
                        </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;
