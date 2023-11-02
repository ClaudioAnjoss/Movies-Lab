import Poster from 'components/Poster'
import Card from 'components/Card'
import CardSkeleton from 'components/CardSkeleton'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import CoverLoading from 'assets/Loader.gif'
import styles from './Home.module.scss'
import useFetchSearchMovies from 'queries/search'

export default function Home() {
  const search = useSelector((state) => state.search)
  const [filmes, setFilmes] = useState([])
  const [featuredCover, setFeaturedCover] = useState()

  const { data, isLoading } = useFetchSearchMovies(search)

  console.log(data)

  const movies = useSelector((state) => {
    return state.movies
  })

  const handeLeftArrow = (category) => {
    document.getElementById(`${category}`).scrollLeft -= window.innerWidth / 2
  }

  const handeRightArrow = (category) => {
    document.getElementById(`${category}`).scrollLeft += window.innerWidth / 2
  }

  useEffect(() => {
    movies.then((e) => {
      setFilmes(e)

      // Featured
      const action = e.filter((i) => i.slug === 'comedy')
      const randomChosen = Math.floor(
        Math.random() * (action[0].item.length - 1),
      )
      const chosen = action[0].item[randomChosen]
      setFeaturedCover(chosen)
    })
  }, [movies])

  return (
    <div className={styles.container}>
      <div className={styles['container--poster']}>
        {featuredCover ? (
          <Poster {...featuredCover} />
        ) : (
          <img
            className={styles['loading--poster']}
            src={CoverLoading}
            alt="Capa do filme"
          />
        )}
      </div>

      {search ? (
        <div className={styles.featured}>
          <div className={styles['info--search']}>
            <h1 className={styles.title}>Pesquisando por: {search} </h1>
            <p>{data?.total_results} Resultados</p>
          </div>

          <div className={styles.container_result}>
            {!isLoading ? (
              data.results?.map((e, index) => <Card key={index} {...e} />)
            ) : (
              <img src={CoverLoading} alt="Carregando.." />
            )}
          </div>
          <div>
            <button>paginacao</button>
          </div>
        </div>
      ) : (
        filmes.map(({ title, item }, index) => (
          <div key={index} className={styles.featured}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.container_featured}>
              <button
                className={styles['movie--left']}
                onClick={() => handeLeftArrow(title)}
              >
                <AiOutlineLeft />
              </button>

              <div id={title} className={styles['movie--list']}>
                {item.map((e, index) => (
                  <Card key={index} {...e} />
                ))}
              </div>

              <button
                className={styles['movie--right']}
                onClick={() => handeRightArrow(title)}
              >
                <AiOutlineRight />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
