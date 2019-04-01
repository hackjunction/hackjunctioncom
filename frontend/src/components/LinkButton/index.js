import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

const LinkButton = ({ text, to }) => {

	return (
		<div className="LinkButton--wrapper">
			<Link className="LinkButton" to={to}>
				<span className="LinkButton--text">{text}</span>
			</Link>
		</div>
	)
}

export default LinkButton