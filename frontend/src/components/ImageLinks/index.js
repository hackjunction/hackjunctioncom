import React from 'react'
import './style.scss'

import ImageLink from '../ImageLink'

const ImageLinks = ({ links }) => {

	function renderLinks() {
		return links.map(link => {
			return (
				<ImageLink {...link} />
			)
		})
	}

	return (
		<div className="ImageLinks">
			{renderLinks()}
		</div>
	)
}

export default ImageLinks