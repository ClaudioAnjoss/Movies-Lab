import { createSlice } from '@reduxjs/toolkit'

const API_KEY = '394f420e82b7b9e3e795e50b65c867ac'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`).then((res) => res.json())

  return req
}

// console.log(
//   basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
// )

const initialState = () => {
  return [
    {
      slug: 'originals',
      title: 'Originais',
      item: basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'trending',
      title: 'Recomendados',
      item: basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      item: basicFetch(`/movie/top_rated?languague=pt-BR&api_key=${API_KEY}`),
    },
    {
      slug: 'action',
      title: 'Ação',
      item: basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      item: basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'horror',
      title: 'Terror',
      item: basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'romance',
      title: 'Romance',
      item: basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'documentary',
      title: 'Documentarios',
      item: basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
  ]
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
})

export default movieSlice.reducer
