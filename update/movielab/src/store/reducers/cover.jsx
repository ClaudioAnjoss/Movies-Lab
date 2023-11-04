import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const coverSlice = createSlice({
  name: 'cover',
  initialState,
  reducers: {
    setCover: (state, { payload }) => {
      return payload
    },
  },
})

export const { setCover } = coverSlice.actions
export default coverSlice.reducer
