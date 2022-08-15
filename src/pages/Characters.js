import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import ReactPaginate from 'react-paginate';
import './Home.css';
import './Characters.css';

const Characters = () => {

    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const getCharacters = async () => {
        console.log("I'm in useEffect for Characters!!!");
        const baseURL = 'https://rickandmortyapi.com/api/character/'

        try {
            setLoading(true);
            const URL = baseURL;
            const res = await axios.get(URL);
            console.log(res.data.info);
            console.log(res.data.results);
            console.log(res.data.info);
            setCharacters(res.data.results);
            setPageCount(res.data.info.pages);
            setLoading(false);
        }
        catch(err) {
            console.log(err);
        }
    }

  useEffect(() => {
    getCharacters();
  }, []);

  if (loading) {
    return <Spinner />
  } else {
    return (
        <div className="container">
            <div className="jumbotron">
                <h2>Characters</h2>
                <p className="lead text-center pb-3 px-5">All the Rick & Morty Characters You Could Ask For!!!</p>
                <div className="row">
                    {characters.map(character =>
                        <Link to="/character" state={{ character }} key={character.id} className="col justify-content-around">
                            <div className="card character-img mb-4">
                                <img src={character.image} alt=""  className="card-img-top"></img>
                                <div className="card-body mx-0 px-0 bg-dark text-white">
                                    <h6 className="card-title font-weight-bold">{character.name}</h6>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={getCharacters}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
      )    
  }
}

export default Characters