import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const searchMovieSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    getResults(state, { payload }) {
      return [...state, payload]
    },
  },
})

export default searchMovieSlice.reducer
export const { getResults } = searchMovieSlice.actions
