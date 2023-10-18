import { Link } from 'react-router-dom'
import Note from '../../assets/Note.png'
import Relevance from '../../assets/Relevance.png'
import styles from './Card.module.scss'

function Card() {
  return (
    <div className={styles.card}>
      <Link to={`/movie/`}>
        <img
          className={styles.card_thumb}
          src="https://img.elo7.com.br/product/zoom/2368C5D/big-poster-filme-marvel-venom-tamanho-90x60-cm-loot-op-010-geek.jpg"
          alt=""
        />
      </Link>

      <h1>name</h1>

      <div className="note">
        <span>
          <img src={Note} alt="" />
        </span>
        <span>
          <img src={Relevance} alt="" />
        </span>
      </div>
    </div>
  )
}

export default Card
