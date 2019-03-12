import React, { useState } from 'react'
import './style.scss'

import VisibilitySensor from 'react-visibility-sensor';

const STATES = {
	BEFORE: 'before',
	ACTIVE: 'active',
	AFTER: 'after'
}

const AppearOnScreen = ({ children, partialVisibility = true, offset = 200, type = 'from-left' }) => {

	const validAnimations = [
		'from-left',
		'from-right'
	]

	function onVisibilityChange(isVisible) {
		console.log('Visiblity changed!', isVisible)
	}

	return (
		<VisibilitySensor
			onChange={onVisibilityChange}
			partialVisibility={true}
			offset={{ top: offset, bottom: offset }}
		>
			<div>
				{children}
			</div>
		</VisibilitySensor>
	)
}

export default AppearOnScreen