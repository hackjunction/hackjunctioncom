import React, { useState } from 'react'
import './style.scss'

import Image from '../Image'

const HeaderVideo = ({ videoSource, posterImage, alt, navTitle }) => {

	const [imageLoaded, setImageLoaded] = useState(false)
	const [videoLoaded, setVideoLoaded] = useState(false)

	return (
		<div className={`HeaderImage ${imageLoaded ? 'HeaderImage-loaded' : ''}`}>
			<Image image={posterImage} width={1920} height={900} alt={alt} className="HeaderImage--img" onLoad={() => setImageLoaded(true)} />
			<div className={`HeaderImage--vid ${videoLoaded ? 'HeaderImage--vid-visible' : ''}`}>
				<video
					autoPlay
					onPlay={() => setVideoLoaded(true)}
					data-dashjs-player
					src={videoSource}>
				</video>
			</div>
			<img className="HeaderImage--wave-overlay" src={require('../../assets/misc/wave-ltr.png')} alt="Wave overlay" />
			{navTitle ? <h1 className="HeaderImage--nav-title">{navTitle}</h1> : null}
		</div >
	)
}

export default HeaderVideo