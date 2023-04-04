import React from 'react'
import { Link } from 'react-router-dom'
import cl from '../../styles/header/header.module.css'
import HeaderBtn from './btn/HeaderBtn'
import Sign from './sign/Sign'

function Header() {
  return (
    <header className={cl.header}>
      <Link to={'/'} className={cl.logo}>
        <img src="/images/logo.svg" alt="Home"/>
      </Link>
      <HeaderBtn/>
      <Sign/>
    </header>
  )
}

export default Header