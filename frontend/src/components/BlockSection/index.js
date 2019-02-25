import React from 'react'
import './style.scss'

const BlockSection = ({ title, subtitle, children }) => {

	return (
		<div className="BlockSection">
			<div className="BlockSection--left">
				<h3 className="BlockSection--left__title">{title}</h3>
				<p className="BlockSection--left__subtitle">{subtitle}</p>
			</div>
			<div className="BlockSection--right">
				{children}
			</div>
		</div>
	)
}

export default BlockSection