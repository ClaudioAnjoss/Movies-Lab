import { createSlice } from '@reduxjs/toolkit'

const initialState = 1

const paginationSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPages: (state, { payload }) => payload,
  },
})

export const { setPages } = paginationSlice.actions
export default paginationSlice.reducer
