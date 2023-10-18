import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './movies'

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
})

export default store
