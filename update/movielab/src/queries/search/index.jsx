import { useQuery } from 'react-query'
import api from 'services/api'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTRmNDIwZTgyYjdiOWUzZTc5NWU1MGI2NWM4NjdhYyIsInN1YiI6IjYzNjI0NTQyODU4Njc4MDA3ZDgzNDg2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IhZ-ElfMeOG14l7JOE4NYg6IgpLwFAlMPVYwjvrwtFU',
  },
}

async function searchMovies(ctx) {
  const [, inputSearch, options, page] = ctx.queryKey

  const { data } = await api.get(
    `https://api.themoviedb.org/3/search/movie?query=${inputSearch}&include_adult=false&language=pt-US&page=${page}`,
    options,
  )

  return data
}

export default function useFetchSearchMovies(inputSearch, page) {
  return useQuery(['search', inputSearch, options, page], searchMovies)
}
