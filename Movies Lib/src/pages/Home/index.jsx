import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Poster from "../../components/Poster";

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
        <div className='container'>
            <Navbar />  
            <Poster />          
        </div>

    )
}

export default Home;