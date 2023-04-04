import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cl from '../../styles/footer/footer.module.css'
import Button from '../button/Button'

function Footer() {
    const auth = useSelector(state => state.toolkit.auth)
  return (
    <footer className={cl.footer}>
        <div className={cl.block}>
            <h3>Навигация</h3>
            <Link to={'/'}>Новости</Link>
            <Link to={'/friends'}>Друзья</Link>
            <Link to={'/discussions'}>Обсуждения</Link>
            <Link to={'/about'}>О работе</Link>
        </div>
        {auth 
        ?
        <div className={cl.block}>
            <h3>Профиль</h3>
            <Link to={'/user'}>Моя страница</Link>
            <Link to={'/friends'}>Новая запись</Link>
        </div>
        :
        <div className={cl.block}>
            <h3>Профиль</h3>
            <Link to={'/signIn'}>Войти</Link>
            <Link to={'/signUp'}>Зарегистрироваться</Link>
        </div>
        }
        
        <div className={cl.block} style={{textAlign: 'right'}}>
            <h3>Контакты</h3>
            <div className={cl.social}>
                <a href="https://t.me/Tcka4"><i className='bx bxl-telegram'></i></a>
                <a href="https://github.com/AndreiTka4iov"><i className='bx bxl-github' ></i></a>
                <a href="https://www.linkedin.com/in/andreitkachiov"><i className='bx bxl-linkedin' ></i></a>
            </div>
            <a href="mailto:andrei.tkachiov@gmail.com" className={cl.contact}><span className="material-symbols-outlined">mail</span>andrei.tkachiov@gmail.com</a>
            <Button>Связаться</Button>
        </div>
    </footer>
  )
}

export default Footer