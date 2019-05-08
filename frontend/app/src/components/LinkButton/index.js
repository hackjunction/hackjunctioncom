import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

const LinkButton = ({ text, to, onClick }) => {

	return (
		<div className="LinkButton--wrapper">
			<Link className="LinkButton" to={to} onClick={onClick}>
				<span className="LinkButton--text">{text}</span>
			</Link>
		</div>
	)
}

export default LinkButton