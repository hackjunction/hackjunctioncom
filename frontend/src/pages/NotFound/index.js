import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'

const NotFoundPage = () => {

	return (
		<div className="NotFoundPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'404'}
				mainTitle={'Page not found'}
				bodyText={'It seems like the page you were looking for doesn\'t exist...'}
			/>
		</div>
	)
}

export default NotFoundPage