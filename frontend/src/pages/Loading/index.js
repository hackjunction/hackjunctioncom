import React from 'react'
import './style.scss'

import LogoSpinner from '../../components/LogoSpinner'

const LoadingPage = () => {

	return (
		<div className="LoadingPage">
			<LogoSpinner />
		</div>
	)
}

export default LoadingPage