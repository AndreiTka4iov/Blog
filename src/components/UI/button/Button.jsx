import React from 'react'
import cl from '../../styles/button/button.module.css'

function Button({children}) {
  return (
    <button className={cl.button}>{children}</button>
  )
}

export default Button