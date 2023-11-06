/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
import Note from 'assets/Note.png'
import Relevance from 'assets/Relevance.png'
import PhotoUn from 'assets/photoUnavailable.jpg'
import styles from './Card.module.scss'

function Card({ title, name, id, poster_path, vote_average, vote_count }) {
  const validatePhoto = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : PhotoUn
  return (
    <div className={styles.card}>
      <Link to={`/movie/${id}`}>
        <img
          className={styles.card_thumb}
          src={validatePhoto}
          alt={title || name}
        />
      </Link>

      <h1>{title || name}</h1>

      <div className={styles.note}>
        <span>
          <img src={Note} alt={title || name} /> {vote_average}
        </span>
        <span>
          <img src={Relevance} alt={title || name} /> {vote_count}
        </span>
      </div>
    </div>
  )
}

export default Card
