import Navbar from 'components/Navbar'
import Note from 'assets/Note.png'
import Relevance from 'assets/Relevance.png'
import styles from './MovieData.module.scss'
import { useNavigate, useParams } from 'react-router-dom'

import { useQuery } from 'react-query'
import Loader from 'assets/Loader.gif'
import axios from 'axios'

export default function MovieData() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isFetching } = useQuery(
    'dataFilme',
    async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=394f420e82b7b9e3e795e50b65c867ac`,
      )

      return response.data
    },
    {
      staleTime: false,
      cacheTime: false,
    },
  )

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
