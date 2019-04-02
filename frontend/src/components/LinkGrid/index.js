import React from 'react'
import './style.scss'

import Image from '../Image'

const LinkGrid = ({ links }) => {

	function renderLinks() {
		return links.map(link => {
			return (
				<a href={link.url} className="LinkGrid--item">
					<Image
						image={link.image}
						className="LinkGrid--item__image"
						alt={link.alt}
						width={320}
					/>
				</a>
			)
		})
	}

	return (
		<div className="LinkGrid">
			{renderLinks()}
		</div>
	)
}

export default LinkGrid