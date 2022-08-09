import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../images/rickandmortylogo.png';
import './Navbar.css';

const Navbar = ({ icon, title }) => {

    return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light heading py-0">
            <Link to='/' ><h4 className="heading"><img src={logo} alt="Rick and Morty Logo" /> {title} </h4></Link>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle heading py-0" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <p className="lead pt-3 pb-0 my-2"><span>{"    "}</span>API Queries</p>
                        </div>
                        <div className="dropdown-menu heading" aria-labelledby="navbarDropdown">    
                            <Link to='' className="dropdown-item">Characters</Link>
                            <Link to='' className="dropdown-item">Locations</Link>
                            <Link to='' className="dropdown-item">Episodes</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )


}

Navbar.defaultProps = {
    title: 'Rick & Morty API Browser',
  }
  
  Navbar.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Navbar;