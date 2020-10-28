import React, { useState, useEffect } from 'react'
import './style.scss'

const LogoSpinner = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <div className={`LogoSpinner ${loaded ? 'LogoSpinner-loaded' : ''}`}>
      <img
        class="LogoSpinner--logo"
        src={require('../../assets/logos/emblem_white_small.png')}
        alt="Loading"
      />
    </div>
  )
}

export default LogoSpinner
