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

async function filmCover(ctx) {
  const [, id, options] = ctx.queryKey
  const { data } = await api.get(
    `https://api.themoviedb.org/3/movie/${id}?language=pt-BR`,
    options,
  )

  return data
}

export default function useFetchFilmCover(id) {
  return useQuery(['cover', id, options], filmCover)
}
