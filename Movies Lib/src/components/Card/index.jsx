import React from 'react';
import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'

import './style.css'

function Card({ item }) {
  return (
    <div className='card'>
      <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.name ? item.name : item.title} />

      <h1>{item.name ? item.name : item.title}</h1>

      <div className='note'>
        <span><img src={Note} />
          {parseInt(item.popularity)}
        </span>
        <span><img src={Relevance} />
          {item.vote_average}
        </span>
      </div>
    </div>
  );
}

export default Card;