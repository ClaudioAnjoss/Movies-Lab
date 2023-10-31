import Navbar from 'components/Navbar'
import Poster from 'components/Poster'
import Card from 'components/Card'
import CardSkeleton from 'components/CardSkeleton'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import CoverLoading from 'assets/Loader.gif'
import styles from './Home.module.scss'
import axios from 'axios'
import {
  QueryClient,
  useInfiniteQuery,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from 'react-query'

export default function Home() {
  const search = useSelector((state) => state.search)
  const [filmes, setFilmes] = useState([])
  const [featuredCover, setFeaturedCover] = useState()
  const [pesquisa, setPesquisa] = useState({})

  const { data, isLoading, refetch } = useQuery('search', async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=394f420e82b7b9e3e795e50b65c867ac&query=${search}`,
    )

    return response.data.results
  })

  if (search) {
    console.log('chegou aqui')
  }

  console.log(data)

  const searchResults = useSelector((e) => e.results)

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

      <div className={styles.featured}>
        <h1 className={styles.title}>Resultado para: {search} </h1>

        <div className={styles.container_result}>
          {search &&
            data?.map((e, index) => (
              <>
                {console.log(e)}
                <Card key={index} {...e} />
              </>
            ))}
        </div>
      </div>

      {searchResults.map(({ results }, index) => (
        <div key={index} className={styles.featured}>
          <h1 className={styles.title}>Resultado para: {search}</h1>

          <div className={styles.container_result}>
            {results.map((data, index) => (
              <Card key={index} {...data} />
            ))}
          </div>
        </div>
      ))}

      {filmes.map(({ title, item }, index) => (
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
