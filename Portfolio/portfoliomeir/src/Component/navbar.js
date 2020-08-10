import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Portfolio Meir</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                    </div>
                    <div className="nav-content">
                        <ul className="tabs tabs-transparent">

                            <li className="tab">
                            <Link className='nav__link' to='/'>
                                Présentation
                            </Link>
                            </li>

                            <li className="tab">
                                <Link className='nav__link' to='/coordonnees'>
                                    Coordonnees
                                </Link>
                            </li>

                            <li className="tab disabled">
                                <Link className='nav__link' to='/competences'>
                                    Competences
                                </Link>
                            </li>

                            <li className="tab">
                                <Link className='nav__link' to='/hobbies'>
                                    Hobbies
                                </Link>
                            </li>

                            <li className="tab">
                                <Link className='nav__link' to='/projets'>
                                    Projets
                                </Link>
                            </li>

                            <li className="tab">
                                <Link className='nav__link' to='/Contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;