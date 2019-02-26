import React from 'react'
import './style.scss'

const HeaderImage = ({ src, alt }) => {
	return (
		<div className="HeaderImage">
			{src ? <img className="HeaderImage--img" src={src} alt={alt} /> : null}
			<img className="HeaderImage--wave-overlay" src={require('../../assets/misc/wave-ltr.png')} alt="Wave overlay" />
		</div>
	)
}

export default HeaderImage