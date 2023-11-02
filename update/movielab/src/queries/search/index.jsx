import { useQuery } from 'react-query'
import api from 'services/api'

async function searchMovies(ctx) {
  const [, inputSearch] = ctx.queryKey

  console.log(inputSearch)
  const { data } = await api.get(
    `https://api.themoviedb.org/3/search/movie?api_key=394f420e82b7b9e3e795e50b65c867ac&query=${inputSearch}`,
  )

  return data
}

export default function useFetchSearchMovies(inputSearch) {
  return useQuery(['search', inputSearch], searchMovies)
}
