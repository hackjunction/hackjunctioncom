import React from 'react'
import './style.scss'

const StatBlock = ({ value, label }) => {

	return (
		<div className="StatBlock">
			<h6 className="StatBlock--value">{value}</h6>
			<span className="StatBlock--label">{label}</span>
		</div>
	)
}

export default StatBlock