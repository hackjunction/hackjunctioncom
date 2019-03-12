import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'

const ConceptPage = () => {

	return (
		<div className="ConceptPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'JunctionX.'}
				mainTitle={'Your own Junction experience.'}
				bodyText={'Foodoo Voodoo - bro-broodoo?'}
			/>
		</div>
	)
}

export default ConceptPage