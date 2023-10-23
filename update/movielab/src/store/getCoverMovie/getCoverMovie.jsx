import { createSlice } from '@reduxjs/toolkit'

// const action = list.filter((i) => i.slug === 'action')
// const randomChosen = Math.floor(
//   Math.random() * (action[0].item.results.length - 1),
// )
// const chosen = action[0].item.results[randomChosen]
// const chosenInfo = await Data.getMovieInfo(chosen.id, 'movie')
// setFeaturedData(chosenInfo)

const initialState = ''

const coverMovieSlice = createSlice({
  name: 'coverMovie',
  initialState,
})

export default coverMovieSlice.reducer
