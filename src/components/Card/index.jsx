import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'

import './style.css'

function Card({ item }) {
  // console.log(item.id)
  return (
    <div className="card">
      <Link to={`/movie/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
          alt={item.name ? item.name : item.title}
        />
      </Link>

      <h1>{item.name ? item.name : item.title}</h1>

      <div className="note">
        <span>
          <img src={Note} alt={item.nome} />
          {parseInt(item.popularity)}
        </span>
        <span>
          <img src={Relevance} alt={item.nome} />
          {item.vote_average}
        </span>
      </div>
    </div>
  )
}

export default Card
