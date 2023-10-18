import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Logo.png'
import Menu from '../../assets/Menu.png'

import './style.css'

function Navbar(props) {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleResult(search)
  }

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="Movie Box" />
        <h1>MovieBox</h1>
      </Link>

      <form onSubmit={handleSubmit} className="search">
        <input
          type="text"
          placeholder="What do you want to watch?"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button type="submit">
          <BiSearchAlt className="icon-search" />
        </button>
      </form>

      <div className="sign-in">
        <h1>Sign in</h1>
        <img src={Menu} alt="menu" />
      </div>
    </div>
  )
}

export default Navbar
