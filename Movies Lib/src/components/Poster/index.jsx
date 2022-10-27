import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi'

import Thumbnail from '../../assets/Thumbnail.png'
import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'

import './style.css'

function Poster() {
    return (
        <div className='poster'>
            <img src={Thumbnail} alt="Thumbnail" />

            <div className="info">
                <h1>John Wick 3 : Parabellum</h1>

                <div className='note'>
                    <span>
                        <img src={Note} alt="" />
                        86.0 / 100
                    </span>
                    <span>
                        <img src={Relevance} alt="" />
                        97%
                    </span>
                </div>

                <p className="description">
                    John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                </p>

                <a className='btn-detail' href="#">
                    <BiArrowFromLeft className='icon' />
                    Details
                </a>
            </div>
        </div>
    );
}

export default Poster;