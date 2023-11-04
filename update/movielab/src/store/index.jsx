import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './getMovie/getMovie'
import searchMovie from './searchMovie/searchMovie'
import searchSlice from './reducers/search'
import pagination from './reducers/pagination'
import cover from './reducers/cover'

const store = configureStore({
  reducer: {
    movies: movieSlice,
    results: searchMovie,
    search: searchSlice,
    pages: pagination,
    cover,
  },
})

export default store
