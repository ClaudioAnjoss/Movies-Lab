/* eslint-disable camelcase */
import { BiArrowFromLeft } from 'react-icons/bi'

import Note from 'assets/Note.png'
import Relevance from 'assets/Relevance.png'
import styles from './Poster.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Poster({
  title,
  name,
  overview,
  backdrop_path,
  vote_average,
  vote_count,
  id,
}) {
  const search = useSelector((state) => state.search)

  return (
    <div className={classNames(styles.poster, { [styles.active]: search })}>
      <img
        className={styles.thumbnail}
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={name || title}
      />

      <div className={styles.info}>
        <h1>{name || title}</h1>
        <div className={styles.note}>
          <span>
            <img src={Note} alt="Nota" />
            {vote_average}
          </span>
          <span>
            <img src={Relevance} alt="Relevancia" />
            {vote_count}
          </span>
        </div>

        <p className={styles.description}>{overview}</p>

        <Link to={`/movie/${id}`} className={styles['btn-detail']}>
          <BiArrowFromLeft className={styles.icon} /> Detalhes
        </Link>
      </div>
    </div>
  )
}
