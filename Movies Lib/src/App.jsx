
import { Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      {/* <Home /> */}

      <Link to="/"> inicio </Link>
      <Link to="/movie/1"> movie </Link>
      <Link to="/search"> search </Link>

      <Outlet />
    </div>
  )
}

export default App
