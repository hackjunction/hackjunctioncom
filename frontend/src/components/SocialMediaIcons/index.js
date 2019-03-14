import React from 'react'
import './style.scss'

import SocialMediaIcon from '../SocialMediaIcon/';

const SocialMediaIcons = ({ iconProps }) => {

	function renderIcons() {
		return iconProps.map(icon => {
			return (
				<SocialMediaIcon key={icon.alt + '-' + icon.link} {...icon} />
			)
		})
	}

	return (
		<div className="SocialMediaIcons">
			{renderIcons()}
		</div>
	)
}

export default SocialMediaIcons