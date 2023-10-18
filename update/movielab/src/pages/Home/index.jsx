import Navbar from 'components/Navbar'
import Poster from 'components/Poster'
import Card from 'components/Card'
import CardSkeleton from 'components/CardSkeleton'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styles from './Home.module.scss'
import { useSelector } from 'react-redux'
import { getHomeList } from 'store/getMovie/getMovie'

export default function Home() {
  const movies = useSelector((state) => {
    return state.movies
  })

  console.log(movies)

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles['container--poster']}>
        <Poster />
        {/* <img className="loading--poster" src={Loader} /> */}
      </div>

      <div className={styles.featured}>
        <h1 className={styles.title}>Resultado para: </h1>

        <div className={styles.container_result}>
          <Card />
        </div>
      </div>
      <div className={styles.featured}>
        <h1 className={styles.title}>titulo</h1>

        <div className={styles.container_featured}>
          <button className={styles['movie--left']}>
            <AiOutlineLeft />
          </button>

          <div className={styles['movie--list']}>
            <Card />
          </div>

          <button className={styles['movie--right']}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
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
