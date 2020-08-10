import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Presentation from "./Component/Presentation";
import Coordonnes from "./Component/Coordonnes";
import Competences from "./Component/Competences";
import Hobbies from "./Component/Hobbies";
import Projet from "./Component/Project";
import Contact from "./Component/Contact";
import './App.css';
import PictureProfile from "./Component/PictureProfil";
import './Component/stylessass/style.css';
import Navbar from "./Component/navbar";
function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Presentation} />
                <Route exact path='/coordonnees' component={Coordonnes} />
                <Route exact path='/competences' component={Competences} />
                <Route exact path='/projets' component={Projet} />
                <Route exact path='/hobbies' component={Hobbies} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        </Router>
      <div className='profilpicture'>
      </div>
    </div>
  );
}
export default App;
