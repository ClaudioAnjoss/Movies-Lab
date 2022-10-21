import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'

const imageUrl = import.meta.env.VITE_IMG;

// import { Container } from './styles';

const Card_Emphasis = ({movie}) => {
    return (
        <div className='card-emphasis'>
           
            {movie.length > 0 && <Link to={`/movie${movie.id}`}><img src={imageUrl + movie[16].poster_path} alt={movie[0].title} /></Link>}
        </div>
    );
}

export default Card_Emphasis;