import './style.scss'
import React from 'react'

export default ({ name, title, mail, img }) => {
  return (
    <div className="Box">
      <div>
        <img />
        <h4>{name}</h4>
        <p>{title}</p>
        <p>{mail}</p>
      </div>
    </div>
  )
}
