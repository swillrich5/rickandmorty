import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import characters from '../images/characters.jpeg';
import episode from '../images/episode.png';
import location from '../images/locations.jpg';

const Home = () => {
  return (
    <div className="container">
        <div className="jumbotron">
            <h2>Welcome to the Rick & Morty API Browser</h2>
            <p>
                Just to keep my skills sharp (React / Javascript programming are perishable skills!), I'm coding a 
                React application that uses the <a href="https://rickandmortyapi.com/">the Rick & Morty API</a>. The 
                API has three endpoints:
            </p>
            <ul>
                <li>characters: produces a listing of all of the characters, which can filtered</li>
                <li>location: produces of listing of all of the locations in Rick & Morty episodes</li>
                <li>episode: produces a listing of all of the episodes, which can be filtered</li>
            </ul>
            <p>
                For more information about the endpoints, please visit <a href="https://rickandmortyapi.com/documentation">Rick & Morty API Documentation</a>.
            </p>
            <p>Please select one of the categories below to browse content.</p>
            <div className="row justify-content-center">
                <Link className="justify-content-center ml-4" to='/characters'>
                    <div className="card shadow-lg bg-light px-3 rounded mb-3">
                        <img className="card-img-top pt-3" src={characters} alt="Characters"/>
                        <div className="card-body">
                            <p className="card-text text-center">Characters</p>
                        </div>
                    </div>
                </Link>
                <Link className="justify-content-center ml-4" to='/locations'>
                    <div className="card shadow-lg bg-light rounded px-3 mb-3">
                        <img className="card-img-top pt-3" src={location} alt="Locations"/>
                        <div className="card-body">
                            <p className="card-text text-center">Locations</p>
                        </div>
                    </div>
                </Link>
                <Link className="justify-content-center ml-4" to='/episodes'>
                    <div className="card shadow-lg bg-light rounded px-3 mb-3">
                        <img className="card-img-top pt-3" src={episode} alt="Episodes"/>
                        <div className="card-body">
                            <p className="card-text text-center">Episodes</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;