import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-default">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Salome A. Ranson</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
                            </li>

                            <li className="nav-item">
                                 <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            
        </div>
    )
}


export default Header;
