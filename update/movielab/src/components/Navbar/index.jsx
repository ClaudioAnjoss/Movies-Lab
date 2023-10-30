import Logo from 'assets/Logo.png'
import Menu from 'assets/Menu.png'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { useState } from 'react'
import axios from 'axios'
import { getResults } from 'store/searchMovie/searchMovie'
import { useDispatch, useSelector } from 'react-redux'
import { getSearch } from 'store/reducers/search'

export default function Navbar() {
  const search = useSelector((state) => state.search)
  // const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSubMit = (e) => {
    e.preventDefault()
    // const response = await axios.get(
    //   `https://api.themoviedb.org/3/search/movie?api_key=394f420e82b7b9e3e795e50b65c867ac&query=${search}`,
    // )
    // return dispatch(getResults(response.data, search))
  }

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Movie Box" />
        <h1>MovieBox</h1>
      </Link>

      <form onSubmit={handleSubMit} className={styles.search}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          onChange={(e) => dispatch(getSearch(e.target.value))}
          value={search}
        />

        <button>
          <BiSearchAlt className={styles['icon-search']} />
        </button>
      </form>

      <div className={styles['sign-in']}>
        <h1>Sign in</h1>
        <img src={Menu} alt="menu" />
      </div>
    </div>
  )
}
