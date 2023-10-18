import Logo from 'assets/Logo.png'
import Menu from 'assets/Menu.png'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Movie Box" />
        <h1>MovieBox</h1>
      </Link>

      <form className={styles.search}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          // onChange={(e) => setSearch(e.target.value)}
          // value={search}
        />

        <button type="submit">
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
