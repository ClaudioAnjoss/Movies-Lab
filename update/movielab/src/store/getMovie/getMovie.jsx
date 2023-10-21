import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const API_KEY = '394f420e82b7b9e3e795e50b65c867ac'
const API_BASE = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const res = await req.json()

  // console.log(res.results)

  return res.results
}

const initialState = async () => {
  return [
    {
      slug: 'originals',
      title: 'Originais',
      item: await basicFetch(
        `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'trending',
      title: 'Recomendados',
      item: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      item: await basicFetch(
        `/movie/top_rated?languague=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'action',
      title: 'Ação',
      item: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      item: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'horror',
      title: 'Terror',
      item: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'romance',
      title: 'Romance',
      item: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'documentary',
      title: 'Documentarios',
      item: await basicFetch(
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
