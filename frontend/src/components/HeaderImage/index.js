import React from 'react'
import './style.scss'

const HeaderImage = ({ src, alt }) => {
	return (
		<div className="HeaderImage">
			{src ? <img className="HeaderImage--img" src={src} alt={alt} /> : null}
		</div>
	)
}

export default HeaderImage