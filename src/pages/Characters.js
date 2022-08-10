import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Characters = () => {

    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
        console.log("I'm in useEffect for Characters!!!");
        const baseURL = 'https://rickandmortyapi.com/api/character/'

        try {
            setLoading(true);
            const URL = baseURL;
            const res = await axios.get(URL);
            console.log(res);
            console.log(res.data.info);
            console.log(res.data.results);
            setLoading(false);
        }
        catch(err) {
            console.log(err);
        }
    }
    getCharacters();
  }, []);

  if (loading) {
    return <Spinner />
  } else {
    return (
        <div className="container">
            <div className="jumbotron">
                <h2>Welcome to the Rick & Morty API Browser</h2>
                <h3>Characters</h3>
            </div>
        </div>
      )    
  }
}

export default Characters