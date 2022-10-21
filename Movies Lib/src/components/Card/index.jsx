import React from 'react';
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

import './style.css'

const imageUrl = import.meta.env.VITE_IMG;

const Card = ({ movie, showLink = true }) => {
    return (
        <div className='card'>
            {showLink && <Link to={`/movie${movie.id}`}><img src={imageUrl + movie.poster_path} alt={movie.title} /></Link>}
        </div>
    );
}

export default Card;