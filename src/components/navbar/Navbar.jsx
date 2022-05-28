import React, { useState } from 'react'
import './navbar.css'
import { MdSearch, MdNotifications, MdArrowDropDown } from 'react-icons/md'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>

          <a href='#@' className='link home'>

          </a>
          <a href='#@' className='link'>
            Inicio
          </a>
          <a href='#@' className='link'>
            Series
          </a>
          <a href='#@' className='link'>
            Peliculas
          </a>
          <a href='#@' className='link'>
            Novedades populares
          </a>
          <a href='#@' className='link'>
            Mi lista
          </a>
        </div>
        <div className='right'>
          <MdSearch className='icon' />
          <MdNotifications className='icon' />
          <img
            src='https://avatars.githubusercontent.com/u/4366303?v=4'
            alt='foto de perfil'
          />
          <div className='profile'>
            <MdArrowDropDown className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
