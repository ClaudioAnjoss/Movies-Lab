import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './getMovie/getMovie'
import searchMovie from './searchMovie/searchMovie'

const store = configureStore({
  reducer: {
    movies: movieSlice,
    results: searchMovie,
  },
})

export default store
