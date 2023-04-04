import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'
import cl from '../../../styles/header/sign/sign.module.css'
import { useSelector } from 'react-redux'

function Sign() {
  const auth = useSelector(state => state.toolkit.auth)

  if (auth){
    return (
      <div className={cl.profile}>
          <Link to={'/create'} className={cl.create}><span className="material-symbols-outlined">add</span></Link>
          <button className={cl.imageBtn}>
          <span class="material-symbols-outlined">person</span>
          </button>
      </div>
    )
  }

  if (!auth){
    return (
      <div className={cl.sign}>
          <Link><Button>Войти</Button></Link>
          <span>или</span>
          <Link className={cl.reg}>Зарегистрироваться</Link>
      </div>
    )
  }
}

export default Sign