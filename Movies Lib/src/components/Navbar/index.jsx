import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'

import Logo from '../../assets/Logo.png'
import Menu from '../../assets/Menu.png'

import './style.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={Logo} alt="Movie Box" />
            <h1>MovieBox</h1>
        </div>

        <form className='search' action="">
            <input type="text" placeholder='What do you want to watch?'  />

            <button type='submit'>
                <BiSearchAlt className='icon-search' />
            </button>
        </form>

        <div className="sign-in">
            <h1>Sign in</h1>
            <img src={Menu} alt="menu" />
        </div>
    </div>
    );
}

export default Navbar;