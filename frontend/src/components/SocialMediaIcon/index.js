import React from 'react'
import './style.scss'

const SocialMediaIcon = ({ imageSrc, link, alt }) => {

	return (
		<a className="SocialMediaIcon" href={link} alt={alt}>
			<img className="SocialMediaIcon--image" src={imageSrc} alt={alt} />
		</a>
	)
}

export default SocialMediaIcon