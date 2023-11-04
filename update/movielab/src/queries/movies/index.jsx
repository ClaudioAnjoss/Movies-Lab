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

async function listFilm(ctx) {
  //   const { data } = await api.get(`/movie/top_rated?languague=pt-BR`, options)

  const data = [
    {
      title: 'Recomendados',
      item: await api.get(`/trending/all/week?language=pt-BR`, options),
    },
    {
      title: 'Em Alta',
      item: await api.get(`/movie/top_rated?languague=pt-BR`, options),
    },
    {
      title: 'Ação',
      item: await api.get(
        `/discover/movie?with_genres=28&language=pt-BR`,
        options,
      ),
    },
    {
      title: 'Comédia',
      item: await api.get(
        `/discover/movie?with_genres=35&language=pt-BR`,
        options,
      ),
    },
    {
      title: 'Terror',
      item: await api.get(
        `/discover/movie?with_genres=27&language=pt-BR`,
        options,
      ),
    },
    {
      title: 'Romance',
      item: await api.get(
        `/discover/movie?with_genres=10749&language=pt-BR`,
        options,
      ),
    },
    {
      title: 'Documentarios',
      item: await api.get(
        `/discover/movie?with_genres=99&language=pt-BR`,
        options,
      ),
    },
  ]

  return data
}

export default function useFetchMovies(url) {
  return useQuery(['movies', url, options], listFilm)
}
