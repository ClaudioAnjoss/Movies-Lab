import { createSlice } from '@reduxjs/toolkit'

const initialState = 1

const paginationSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPages: (state, { payload }) => payload,
    setTotalPages: (state, { payload }) => {
      return [...state, { payload }]
    },
  },
})

export const { setPages, setTotalPages } = paginationSlice.actions
export default paginationSlice.reducer
