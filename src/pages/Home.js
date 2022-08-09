import React from 'react';
import "./Home.css";

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
        </div>
    </div>
  )
}

export default Home;