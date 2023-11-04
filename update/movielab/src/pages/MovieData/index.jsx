import { useNavigate, useParams } from 'react-router-dom'
import useFetchFilmCover from 'queries/cover'
import Note from 'assets/Note.png'
import Relevance from 'assets/Relevance.png'
import styles from './MovieData.module.scss'
import Loader from 'assets/Loader.gif'

export default function MovieData() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isFetching } = useFetchFilmCover(id)

  return (
    <div className={styles['container--loading']}>
      {isFetching && <img src={Loader} alt="Carregando" />}
      {data && (
        <div
          className={styles['container--movie']}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`,
          }}
        >
          <div className={styles['shadow--vertical']}>
            <div className={styles['shadow--horizontal']}>
              <div className={styles['data--movie']}>
                <h1>{data.title || data.name}</h1>
                <p>{data.overview}</p>
                <div className={styles['container--assessments']}>
                  <span>
                    <img src={Note} alt="Popularidade" />
                    {data.vote_average}
                  </span>
                  <span>
                    <img src={Relevance} alt="Nota" />
                    {data.vote_count}
                  </span>
                </div>
                <button
                  onClick={() => navigate(-1)}
                  className={styles['btn-back']}
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
