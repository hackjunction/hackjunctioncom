import React from 'react'
import './style.scss'

import Divider from '../Divider'

import config from '../../services/config'

const DebugPlaceholder = ({ title, description }) => {

	if (!config.IS_DEBUG) {
		return null
	}

	return (
		<React.Fragment>
			<div className="DebugPlaceholder">
				<h3 className="DebugPlaceholder--title">DEBUG: {title}</h3>
				<p className="DebugPlaceholder--description">{description}</p>
			</div>
			<Divider lg />
		</React.Fragment>
	)
}

export default DebugPlaceholder