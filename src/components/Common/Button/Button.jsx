import React from 'react'
import "./Button.css"
const Button = ({text, onClick , outlined}) => {
  return (
    <div className={outlined ? 'outlinedBtn' :'btn'} onClick={()=>{onClick()}}>{text}</div>
  )
}

export default Button