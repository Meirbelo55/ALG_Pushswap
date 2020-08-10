import React, {Component, Fragment} from 'react';
import './App.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Goku from './Component/Goku';
import Vegeta from "./Component/Vegeta";
import Frieza from './Component/Frieza';
import ErrorBoundary from "./Component/ErrorBoundaries";
import AddHits from "./Component/addHits";

class App extends  Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container text-center">
                <h1>clicker here </h1>
                <div className='row'>
                    <AddHits  render={(hits, addOne,name)=>
                    <Vegeta hits={hits} addOne={addOne} name="Vegeta"/>
                    }/>

                    <AddHits  render={(hits, addOne,name)=>
                        <Goku hits={hits} addOne={addOne} name="Goku"/>
                    }/>
                    <Card>
                    <ErrorBoundary>
                    <Goku  name="Goku"/>
                    </ErrorBoundary>
                    </Card>
                    <Card>
                    <ErrorBoundary>
                        <Vegeta  render={(saiyan) => saiyan && "Vegeta"} />
                    </ErrorBoundary>
                    </Card>
                        <Card>
                    <ErrorBoundary>
                    <Frieza  name="frieza"/>
                    </ErrorBoundary>
                        </Card>
                </div>
            </div>
        );
    }
}

export default App;
