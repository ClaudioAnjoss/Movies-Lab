import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './reducers/search'
import pagination from './reducers/pagination'
import cover from './reducers/cover'

const store = configureStore({
  reducer: {
    search: searchSlice,
    pages: pagination,
    cover,
  },
})

export default store
