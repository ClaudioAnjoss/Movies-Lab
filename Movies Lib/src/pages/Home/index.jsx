import { useState, useEffect } from "react";
import { BiSearchAlt2 } from 'react-icons/bi'
import Card from "../../components/Card";
import Card_Emphasis from "../../components/Card_Emphasis"

import './style.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    // const [topMovies, setTopMovies] = useState([])

    // const getTopRatedMovies = async (url) => {
    //     const res = await fetch(url);
    //     const data = await res.json();

    //     setTopMovies(data.results)
    // }

    // useEffect(() => {
    //     const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

    //     getTopRatedMovies(topRatedUrl)
    // }, [])

    return (
        <div className='container'>
            <div className="description">
                Descricao
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
                    <Card_Emphasis />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Home;