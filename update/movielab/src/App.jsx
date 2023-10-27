import { Outlet } from 'react-router-dom'
import './styles/StyleGlobal.scss'
import Navbar from 'components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
