import Poster from 'components/Poster'
import Card from 'components/Card'
import CardSkeleton from 'components/CardSkeleton'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import CoverLoading from 'assets/Loader.gif'
import styles from './Home.module.scss'
import useFetchSearchMovies from 'queries/search'
import { setPages } from 'store/reducers/pagination'
import useFetchMovies from 'queries/movies'
import { setCover } from 'store/reducers/cover'

export default function Home() {
  // Variaveis de Ambiente
  const search = useSelector((state) => state.search)
  const page = useSelector((state) => state.pages)
  const cover = useSelector((state) => state.cover)
  const [featuredCover, setFeaturedCover] = useState() // criar uma variavel de ambiente

  console.log(cover)

  const dispatch = useDispatch()

  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]

  const listFilm = useFetchMovies()
  const { data, isLoading } = useFetchSearchMovies(search, page)

  if (page > data?.total_pages) {
    dispatch(setPages(1))
  }

  const handeLeftArrow = (category) => {
    document.getElementById(`${category}`).scrollLeft -= window.innerWidth / 2
  }

  const handeRightArrow = (category) => {
    document.getElementById(`${category}`).scrollLeft += window.innerWidth / 2
  }

  // console.log(!listFilm.isLoading)

  useEffect(() => {
    if (!listFilm?.isLoading) {
      console.log('chegou aqui')
      // Featured
      const action = listFilm?.data?.filter((i) => i.title === 'Comédia')
      const randomChosen = Math.floor(
        Math.random() * (action[0].item.data.results.length - 1),
      )
      const chosen = action[0].item.data.results[randomChosen]
      dispatch(setCover(chosen))
      setFeaturedCover(chosen)
    }
  }, [listFilm.isLoading])

  return (
    <div className={styles.container}>
      <div className={styles['container--poster']}>
        {cover ? (
          <Poster {...cover} />
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
            {!isLoading
              ? data?.results?.map((e, index) => <Card key={index} {...e} />)
              : skeleton.map((e) => <CardSkeleton key={e} />)}
          </div>
          <div className={styles.container_pages}>
            <button
              // onClick={() => setPage((old) => Math.max(old - 1, 1))}
              onClick={() => dispatch(setPages(Math.max(page - 1, 1)))}
              disabled={page === 1}
            >
              Pagina Anterior
            </button>
            <span>Pagina atual: {page} </span>
            <button
              // onClick={() => setPage((old) => old + 1)}
              onClick={() => dispatch(setPages(page + 1))}
              disabled={data?.total_pages <= page}
            >
              Proxima Pagina
            </button>
          </div>
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
