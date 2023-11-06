import styles from './Home.module.scss'
import Poster from 'components/Poster'
import Card from 'components/Card'
import CardSkeleton from 'components/CardSkeleton'
import CoverLoading from 'assets/Loader.gif'
import useFetchSearchMovies from 'queries/search'
import useFetchMovies from 'queries/movies'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setPages } from 'store/reducers/pagination'
import { setCover } from 'store/reducers/cover'
import NavigationBar from 'components/NavigationBar'

export default function Home() {
  const dispatch = useDispatch()

  // Variaveis de Ambiente
  const search = useSelector((state) => state.search)
  const page = useSelector((state) => state.pages)
  const cover = useSelector((state) => state.cover)

  const listFilm = useFetchMovies() // Lista de filmes
  const { data, isLoading } = useFetchSearchMovies(search, page) // Resultado da pesquisa por filmes

  if (page > data?.total_pages) {
    dispatch(setPages(1))
  }

  const handeLeftArrow = (category) => {
    document.getElementById(`${category}`).scrollLeft -= window.innerWidth / 2
  }

  const handeRightArrow = (category) => {
    document.getElementById(`${category}`).scrollLeft += window.innerWidth / 2
  }

  useEffect(() => {
    if (listFilm.status === 'success' && cover.length < 1) {
      // Featured
      const action = listFilm?.data?.filter((i) => i.title === 'Comédia')
      const randomChosen = Math.floor(
        Math.random() * (action[0].item.data.results.length - 1),
      )
      const chosen = action[0].item.data.results[randomChosen]
      dispatch(setCover(chosen))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listFilm.status])

  return (
    <div className={styles.container}>
      <div className={styles['container--poster']}>
        {cover.length === 0 ? (
          <img
            className={styles['loading--poster']}
            src={CoverLoading}
            alt="Capa do filme"
          />
        ) : (
          <Poster {...cover} />
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
              data?.results?.map((e, index) => <Card key={index} {...e} />)
            ) : (
              <CardSkeleton times={20} />
            )}
          </div>
          <NavigationBar
            times={data?.total_pages}
            totalPages={data?.total_pages}
            pageActive={data?.page}
          />
        </div>
      ) : (
        listFilm?.data?.map(({ title, item }, index) => (
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
                {item?.data?.results?.map((e, index) => (
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
