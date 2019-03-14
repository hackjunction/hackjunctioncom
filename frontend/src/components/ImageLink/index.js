import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

const ImageLink = ({ imageSrc, imageAlt, linkTo, linkText }) => {
	return (
		<div className="ImageLink">
			<img className="ImageLink--image" src={imageSrc} alt={imageAlt} />
			<Link className="ImageLink--link" to={linkTo}>
				<span className="ImageLink--link__text">{linkText}</span>
			</Link>
		</div>
	)
}

export default ImageLink