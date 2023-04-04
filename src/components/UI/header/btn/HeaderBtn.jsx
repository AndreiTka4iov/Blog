import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from '../../../styles/header/header.module.css'

function HeaderBtn() {
  return (
    <nav className={cl.navBlock}>
       <NavLink to={'/'} className={({isActive}) => isActive ? cl.NavLink + " " + cl.active : cl.NavLink}>Новости</NavLink> 
       <NavLink to={'/friends'} className={({isActive}) => isActive ? cl.NavLink + " " + cl.active : cl.NavLink}>Друзья</NavLink>
       <NavLink to={'/discussions'} className={({isActive}) => isActive ? cl.NavLink + " " + cl.active : cl.NavLink}>Обсуждения</NavLink>
       <NavLink to={'/about'} className={({isActive}) => isActive ? cl.NavLink + " " + cl.active : cl.NavLink}>О работе</NavLink>
    </nav>
  )
}

export default HeaderBtn