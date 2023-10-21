import Navbar from 'components/Navbar'
import Poster from 'components/Poster'
import Card from 'components/Card'
import CardSkeleton from 'components/CardSkeleton'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styles from './Home.module.scss'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Home() {
  const [filmes, setFilmes] = useState([])
  const movies = useSelector((state) => {
    return state.movies
  })

  console.log(movies)

  useEffect(() => {
    movies.then((e) => setFilmes(e))
  }, [])

  console.log(filmes)

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles['container--poster']}>
        <Poster />
        {/* <img className="loading--poster" src={Loader} /> */}
      </div>

      {/* <div className={styles.featured}>
        <h1 className={styles.title}>Resultado para: </h1>

        <div className={styles.container_result}>
          <Card />
        </div>
      </div> */}

      {filmes.map(({ title, item }, index) => (
        <div key={index} className={styles.featured}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.container_featured}>
            <button className={styles['movie--left']}>
              <AiOutlineLeft />
            </button>

            <div className={styles['movie--list']}>
              {item.map((e, index) => (
                <Card key={index} {...e} />
              ))}
            </div>

            <button className={styles['movie--right']}>
              <AiOutlineRight />
            </button>
          </div>
        </div>
      ))}

      {/* <div className={styles.featured}>
              <div className={styles.container_skeleton}>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            </div> */}
    </div>
  )
}
