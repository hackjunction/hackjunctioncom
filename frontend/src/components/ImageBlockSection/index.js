import React from 'react'
import './style.scss'

const ImageBlockSection = ({ imageSrc, imageAlt, title, subtitle, children, offset }) => {

	return (
		<div className={`ImageBlockSection ImageBlockSection-offset${offset}`}>
			<div className="ImageBlockSection--left">
				<img className="ImageBlockSection--image" src={imageSrc} alt={imageAlt} />
			</div>
			<div className="ImageBlockSection--right">
				<div className="ImageBlockSection--right__top">
					<h3 className="ImageBlockSection--title">{title}</h3>
					<span className="ImageBlockSection--subtitle">{subtitle}</span>
				</div>
				<div className="ImageBlockSection--right__bottom">
					{children}
				</div>
			</div>
		</div>
	)
}

export default ImageBlockSection