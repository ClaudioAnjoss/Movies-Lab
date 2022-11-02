import { useState, useEffect } from "react";
import Data from "../../data/Data";
import Card from "../../components/Card";
import CardSkeleton from "../../components/CardSkeleton";
import Navbar from "../../components/Navbar";
import Poster from "../../components/Poster";
import Loader from "../../assets/Loader.gif"

import './style.css'
import { useRef } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Home = () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const firstRenderRef = useRef(true)

    
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

        firstRenderRef.current ? firstRenderRef.current = false : loadAll()     
        
    }, [])

    return (
        <div className='container'>
            <Navbar />

            {featuredData ? <Poster item={featuredData} /> : (
                <div className="poster--loader">
                    <img src={Loader} />
                </div>
            )
            }


            {movieList.map((list, key) => (
                <div key={key} className="featured">
                    <h1 className="title">{list.title}</h1>
                    <div className="container_featured">
                        {list.item.results.map((item, keys) => (
                            <Card
                                key={keys}
                                item={item}
                            />
                            // console.log(item.title)
                        ))}
                    </div>
                </div>
            ))}

            {/* <div className="featured">
                <h1 className="title">Featured Movie</h1>
                <div className="container_featured">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
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

            <div className="featured">
                <h1 className="title">Featured Movie</h1>
                <div className="container_featured">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />     
                </div>
            </div>

            <div className="featured">
                <h1 className="title">Featured Movie</h1>
                <div className="container_featured">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                
                </div>
            </div> */}
        </div>

    )
}

export default Home;