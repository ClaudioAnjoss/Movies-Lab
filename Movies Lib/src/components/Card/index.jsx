import React from 'react';
import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'

import './style.css'

function Card(item) {

  // console.log(item.item)
  return (
    <div className='card'>
      <img src={`https://image.tmdb.org/t/p/w300/${item.item.poster_path}`} alt={item.item.name ? item.item.name : item.item.title} />

      {/* <span className='date'>{item.item.original_language}, {item.item.release_date ? item.item.release_date : 'Data não especificada'}</span> */}

      <h1>{item.item.name ? item.item.name : item.item.title}</h1>

      <div className='note'>
        <span>
          <img src={Note} />
          {parseInt(item.item.popularity)}
        </span>
        <span>
          <img src={Relevance} />
          {item.item.vote_average}
        </span>
      </div>

      {/* <span className='category'>Action, Adventure, Horror</span> */}
    </div>
  );
}

export default Card;