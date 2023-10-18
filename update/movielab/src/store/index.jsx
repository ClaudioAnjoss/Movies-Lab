import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './getMovie/getMovie'

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
})

export default store
