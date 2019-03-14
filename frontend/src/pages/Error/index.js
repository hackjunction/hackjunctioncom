import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import Divider from '../../components/Divider'

const ErrorPage = () => {

	return (
		<div className="ErrorPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'Error.'}
				mainTitle={'Oops, something went wrong'}
				bodyText={'Something went wrong and we\'re unable to show you anything meaningful here - please reload the page to try again'}
			/>
			<Divider lg />
		</div>
	)
}

export default ErrorPage