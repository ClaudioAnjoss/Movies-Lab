import { useState, useEffect } from "react";
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa'
import Card from "../../components/Card";
import Card_Emphasis from "../../components/Card_Emphasis"

import './style.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)

        console.log(topMovies)
    }, [])

    return (
        <div className='container'>sombra

            <div className="description">
                <div className="logo">
                    <img src="https://logosmarcas.net/wp-content/uploads/2021/03/Disney-Logo.png" alt="Logo" />
                </div>
                <div className="title">
                    {topMovies.length === 0 && <p>Carregando...</p>}
                    {topMovies.length > 0 && <h1>{topMovies[16].title}</h1>}
                </div>
                <div className="info">
                    <div className="note">
                    {topMovies.length > 0 && <h1><FaStar />{topMovies[16].vote_average}</h1>}
                    </div>
                    <div className="about">
                    {topMovies.length === 0 && <p>Carregando...</p>}
                    {topMovies.length > 0 && <p>{topMovies[16].overview}</p>}
                    </div>
                </div>
            </div>
            <div className="cards">
                <form>
                    <input type="text" name="" id="" placeholder='Busque um filme' />
                    <button type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
                <h1>Popular New</h1>
                <div className="card-list">
                    <Card_Emphasis movie={topMovies} />
                    {topMovies.length === 0 && <p>Carregando...</p>}
                    {topMovies.length > 0 && topMovies.map((movie) => <Card key={movie.id} movie={movie} />)}
                </div>
            </div>

            <div className="shadow">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && <img src={imageUrl + topMovies[16].backdrop_path}></img>}
            </div>
        </div>

    )
}

export default Home;