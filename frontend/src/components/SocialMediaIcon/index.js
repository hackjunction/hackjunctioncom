import React from 'react'
import './style.scss'

import Image from '../Image'

const SocialMediaIcon = ({ image, link, alt }) => {

	return (
		<a className="SocialMediaIcon" href={link} alt={alt} target="_blank" rel="noopener noreferrer">
			<Image
				image={image}
				alt={alt}
				className="SocialMediaIcon--image"
				width={30}
				height={30}
				crop={'contain'}
			/>
		</a>
	)
}

export default SocialMediaIcon