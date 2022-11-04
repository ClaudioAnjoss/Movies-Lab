import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi'

import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'

import './style.css'

function Poster({item}) {    
    return (
        <div className='poster'>
            <img className='thumbnail' src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="Thumbnail" />

            <div className="info">
                <h1>{item.title}</h1>

                <div className='note'>
                    <span><img src={Note} />
                        {item.vote_average}
                    </span>
                    <span><img src={Relevance} />
                        {item.vote_count}
                    </span>
                </div>

                <p className="description">
                    {item.overview ? item.overview : 'Desculpe ocorreu um erro ao carregar a descrição'}
                </p>

                <a className='btn-detail' href="#">
                    <BiArrowFromLeft className='icon' /> Detalhes
                </a>
            </div>
        </div>
    );
}

export default Poster;