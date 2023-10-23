import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from 'App'
import Home from 'pages/Home'
import MovieData from 'pages/MovieData'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
