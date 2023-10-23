/* eslint-disable camelcase */
import { Link } from 'react-router-dom'
import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'
import styles from './Card.module.scss'

function Card({ title, name, poster_path, vote_average, vote_count }) {
  return (
    <div className={styles.card}>
      <Link to={`/movie/`}>
        <img
          className={styles.card_thumb}
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title || name}
        />
      </Link>

      <h1>{title || name}</h1>

      <div className={styles.note}>
        <span>
          <img src={Note} alt="" /> {vote_average}
        </span>
        <span>
          <img src={Relevance} alt="" /> {vote_count}
        </span>
      </div>
    </div>
  )
}

export default Card
