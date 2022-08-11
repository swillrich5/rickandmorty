import React, { useState, useEffect } from 'react';

const Episodes = ({ episodes }) => {

    console.log("============> Episodes <===========");
    console.log(episodes);
    console.log("============> Episodes <===========");
    const [episodeObject, setEpisodeObject] = useState({episodes});
    let episodeString = '';
    for (let i=0; i < episodes.length; i++) {
        episodeString = episodeString + episodes[i].split("https://rickandmortyapi.com/api/episode/")[1];
        if (i < (episodes.length - 1)) {
            episodeString += ','
        }
    }
    console.log(episodeString);
    console.log(episodeObject);


  return (
    <div>
        <div className="row justify-content-center pb-3">
            {episodes.map(episode => 
                <div className='col' key={episode}>
                    <p>Episode {episode.split("https://rickandmortyapi.com/api/episode/")[1]}</p>
                </div>
            )};
        </div>
    </div>
  )
}

export default Episodes;