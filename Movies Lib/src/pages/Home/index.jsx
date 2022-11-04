import { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import Navbar from "../../components/Navbar";
import Poster from "../../components/Poster";
import Card from "../../components/Card";
import Data from "../../data/Data";
import CardSkeleton from "../../components/CardSkeleton";
import Loader from "../../assets/Loader.gif";

import './style.css'

const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [result, setResult] = useState('');
    const [movieSearch, setMovieSearch] = useState([]);
    const firstRenderRef = useRef(true);
    const [searchState, setSearchState] = useState(600);

    useEffect(() => {
        const loadAll = async () => {
            // Movie list
            let list = await Data.getHomeList();
            setMovieList(list)

            //Featured
            let action = list.filter(i => i.slug === 'action');
            let randomChosen = Math.floor(Math.random() * (action[0].item.results.length - 1));
            let chosen = action[0].item.results[randomChosen];
            let chosenInfo = await Data.getMovieInfo(chosen.id, 'movie')
            setFeaturedData(chosenInfo)
        }

        firstRenderRef.current ? firstRenderRef.current = false : loadAll();
    }, [])

    const handeLeftArrow = (id) => {
        document.getElementById(`${id}`).scrollLeft -= window.innerWidth / 2
    }

    const handeRightArrow = (id) => {
        document.getElementById(`${id}`).scrollLeft += window.innerWidth / 2
    }

    const updateResult = async r => {
        let searchResult = await Data.getSearch(r)

        await r == '' ? setMovieSearch([]) : setMovieSearch(searchResult)

        r.length > 0 ? setSearchState(100) : setSearchState(600);
    }

    return (
        <div className='container'>
            <Navbar handleResult={updateResult} />

            <div style={{ height: searchState }} className="container--poster">
                {featuredData ? <Poster item={featuredData} /> : <img className="loading--poster" src={Loader} />}
            </div>

            {movieSearch.length > 0 ? (
                <div className="featured">
                    <h1 className="title">Resultado:</h1>

                    <div className="container_result">
                        {movieSearch[0].items.results.map((item, keys) => (
                            <Card key={keys} item={item} />
                        ))}
                    </div>
                </div>) :
                (movieList.length > 0 ? (movieList.map((list, key) => (
                    <div key={key} className="featured">
                        <h1 className="title">{list.title}</h1>

                        <div className="container_featured">
                            <button className="movie--left" onClick={() => handeLeftArrow(list.title)}>
                                <AiOutlineLeft />
                            </button>

                            <div id={list.title} className="movie--list">
                                {list.item.results.map((item, keys) => (
                                    <Card key={keys} item={item} />
                                ))}
                            </div>

                            <button className="movie--right" onClick={() => handeRightArrow(list.title)}>
                                <AiOutlineRight />
                            </button>
                        </div>
                    </div>))) :
                    (<div className="featured">
                        <div className="container_skeleton">
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </div>
                    </div>))}
        </div >

    )
}

export default Home;