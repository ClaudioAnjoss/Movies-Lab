import Navbar from 'components/Navbar'
import Note from 'assets/Note.png'
import Relevance from 'assets/Relevance.png'
import styles from './MovieData.module.scss'
import { useParams } from 'react-router-dom'

import { useQuery } from 'react-query'

export default function MovieData() {
  const { id } = useParams()

  const {} = useQuery('filmes', () => {})

  return (
    <div>
      <Navbar />
      <div
        className={styles['container--movie']}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url('https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg')`,
        }}
      >
        <div className={styles['shadow--vertical']}>
          <div className={styles['shadow--horizontal']}>
            <div className={styles['data--movie']}>
              <h1>titulo</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Ipsum
              </p>
              <div className={styles['container--assessments']}>
                <span>
                  <img src={Note} alt="Popularidade" />
                  popularidade
                </span>
                <span>
                  <img src={Relevance} alt="Nota" />
                  nota
                </span>
              </div>
              <a href="#" className={styles['btn-back']}>
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
