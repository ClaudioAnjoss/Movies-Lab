import styles from './Navbar.module.scss'
import Logo from 'assets/Logo.png'
import Menu from 'assets/Menu.png'
import { BiSearchAlt } from 'react-icons/bi'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSearch } from 'store/reducers/search'

export default function Navbar() {
  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()
  const { id } = useParams()

  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Movie Box" />
        <h1>MovieBox</h1>
      </Link>

      <form className={styles.search}>
        {!id && (
          <>
            <input
              type="text"
              placeholder="What do you want to watch?"
              onChange={(e) => dispatch(getSearch(e.target.value))}
              value={search}
            />

            <button disabled>
              <BiSearchAlt className={styles['icon-search']} />
            </button>
          </>
        )}
      </form>

      <div className={styles['sign-in']}>
        <h1>Sign in</h1>
        <img src={Menu} alt="menu" />
      </div>
    </div>
  )
}
