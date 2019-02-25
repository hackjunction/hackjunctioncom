import React from 'react'
import './style.scss'

import _ from 'lodash'

const LinkGrid = ({ links }) => {

	function renderLinks() {
		return _.map(links, (link) => {
			return (
				<div className="LinkGrid--item" key={link.id}>
					<span className="LinkGrid--item__title">{link.title}</span>
				</div>
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