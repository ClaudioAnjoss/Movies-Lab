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
        <div className='container'>sombra
            <div className="description">
                <div className="logo">
                    <img src="https://logosmarcas.net/wp-content/uploads/2021/03/Disney-Logo.png" alt="Logo" />
                </div>
                <div className="title">
                    <img src="https://imagensemoldes.com.br/wp-content/uploads/2022/01/Logo-Luca-Disney-PNG-1280x720.png" alt="Card do filme" />
                </div>
                <div className="info">
                    <div className="note">
                        nota do filme
                    </div>
                    <div className="about">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptates obcaecati quae et architecto, perspiciatis praesentium tempora odit aperiam? Ea animi qui quam doloribus ducimus corrupti cupiditate sapiente? Nulla, culpa?
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

            <div className="shadow">
                <img src="https://lumiere-a.akamaihd.net/v1/images/image_3e1ab31f.jpeg" alt="" />
            </div>
        </div>

    )
}

export default Home;