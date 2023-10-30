import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearch: (state, { payload }) => payload,
  },
})

export const { getSearch } = searchSlice.actions
export default searchSlice.reducer
