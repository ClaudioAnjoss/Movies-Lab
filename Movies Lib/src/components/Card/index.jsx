import React from 'react';
import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'

import './style.css'

function Card() {
  return (
    <div className='card'>
      <img src="https://legadodamarvel.com.br/wp-content/uploads/2021/10/FCUzyDmVUAA8soy.jpg" alt="" />

      <span className='date'>USA, 2016 - Current</span>

      <h1>Stranger Things</h1>

      <div className='note'>
        <span>
          <img src={Note} alt="" />
          86.0 / 100
        </span>
        <span>
          <img src={Relevance} alt="" />
          97%
        </span>
      </div>

      <span className='category'>Action, Adventure, Horror</span>
    </div>
  );
}

export default Card;