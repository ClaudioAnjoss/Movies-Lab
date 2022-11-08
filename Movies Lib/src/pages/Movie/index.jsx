import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Data from '../../data/Data';
import Navbar from "../../components/Navbar";

import './style.css'

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    // console.log(id)

    useEffect(() => {
        // console.log(id)
        const movieInfo = async (id) => {
            let type = '';
            let chosen = await Data.getMovieInfo(id, 'movie');

            chosen.status_code ? type = 'tv' : type = 'movie';

            let chosenInfo = await Data.getMovieInfo(id, type);

            // console.log(type)

            // setMovie(chosenInfo)
            console.log(chosenInfo)
        }

        movieInfo(id)

        console.log(movie)
    }, [])

    return (
        <div>
            {movie && (
                <div className="container--movie">
                <Navbar />
                <h1>{movie.title}</h1>
            </div>
            )}
        </div>        
    )
}

export default Movie;