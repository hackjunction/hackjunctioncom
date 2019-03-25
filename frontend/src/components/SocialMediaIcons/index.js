import React from 'react'
import './style.scss'

import SocialMediaIcon from '../SocialMediaIcon/';

const SocialMediaIcons = ({ data = [] }) => {

	function renderIcons() {
		return data.map(item => {
			return (
				<SocialMediaIcon
					key={item._id}
					image={item.icon}
					alt={item.alt}
					link={item.link}
				/>
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