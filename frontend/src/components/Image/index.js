import React from 'react'
import { Image as CloudinaryImage } from 'cloudinary-react'


const Image = ({ image = {}, alt, className, width, height, crop = 'fill', gravity = 'center', onLoad }) => {

	if (image.public_id) {
		return (
			<CloudinaryImage
				className={className}
				alt={alt}
				width={width}
				height={height}
				publicId={image.public_id}
				crop={crop}
				gravity={gravity}
				onLoad={onLoad}
			/>
		)
	}

	return (
		<img
			src={image.url ? image.url : require('../../assets/images/default_image.jpg')}
			alt={alt}
			className={className}
			width={width}
			height={height}
			onLoad={onLoad}
		/>
	)
}

export default Image