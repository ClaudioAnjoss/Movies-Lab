import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Data from '../../data/Data';
import Navbar from "../../components/Navbar";

import './style.css'
import { useRef } from 'react';

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const movieStatus = useRef(true);

    // console.log(id)

    useEffect(() => {
        // console.log(id)
        const movieInfo = async (id) => {
            let type = '';
            let chosen = await Data.getMovieInfo(id, 'movie');

            await chosen.status_code ? type = 'tv' : type = 'movie';

            let chosenInfo = await Data.getMovieInfo(id, type);

            // console.log(type)

            setMovie(chosenInfo)
            // console.log(chosenInfo)
        }

        movieStatus ? movieInfo(id) : movieStatus = false;

        console.log(movie)

        

        // movie ? movieStatus = false : movieStatus = true;
        // console.log(movieStatus)
        // movieStatus ? movieInfo(id) : ''

    }, [])

    return (
        <div>
            {movie && (
                <div className="container--movie" 
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
                }}
                >
                <Navbar />
                <h1>{movie.title}</h1>
            </div>
            )}
        </div>        
    )
}

export default Movie;