import React from 'react';
import { useLocation } from "react-router-dom";
import Episodes from '../components/Episodes'
import './Character.css';

const Character = () => {

    const location = useLocation();

    const character = location.state.character;

    return (
        <div className="container space-background">
        <div className="jumbotron">
            <div className="row justify-content-center mt-3 pb-3">
                <div className="col">
                    <img src={character.image} className="shadow-lg rounded" alt="character"/>
                    <h1>{character.name}</h1>
                    <div className='mx-5 px-5'>
                        <table className='table table-borderless table-sm'>
                            <tbody>
                                <tr>
                                    <td>Origin: {character.origin.name}</td>
                                    <td>Species: {character.species}</td>
                                </tr>
                                <tr>
                                    <td>Gender: {character.gender}</td>
                                    <td>Status: {character.status}</td>
                                </tr>  
                            </tbody>
                        </table>                            
                    </div>
                    <div>
                        <hr />
                        <h2>Episodes</h2>
                        <Episodes episodes={character.episode}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Character;