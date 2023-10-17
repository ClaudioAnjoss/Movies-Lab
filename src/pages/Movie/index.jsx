import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'

import Data from '../../data/Data'
import Navbar from '../../components/Navbar'
import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'

import './style.css'

const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  let movieStatus = useRef(true)

  // console.log(id)

  useEffect(() => {
    // console.log(id)
    const movieInfo = async (id) => {
      let type = ''
      const chosen = await Data.getMovieInfo(id, 'movie')

      ;(await chosen.status_code) ? (type = 'tv') : (type = 'movie')

      const chosenInfo = await Data.getMovieInfo(id, type)

      setMovie(chosenInfo)
    }

    movieStatus ? movieInfo(id) : (movieStatus = false)
  }, [])

  return (
    <div>
      <Navbar />
      {movie && (
        <div
          className="container--movie"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
          }}
        >
          <div className="shadow--vertical">
            <div className="shadow--horizontal">
              <div className="data--movie">
                <h1>{movie.title}</h1>
                <p>
                  {movie.overview
                    ? movie.overview
                    : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Ipsum."}
                </p>
                <div className="container--assessments">
                  <span>
                    <img src={Note} alt="Popularidade" />
                    {movie.popularity}
                  </span>
                  <span>
                    <img src={Relevance} alt="Nota" />
                    {movie.vote_average}
                  </span>
                </div>
                <Link className="btn-back" to="/">
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie
