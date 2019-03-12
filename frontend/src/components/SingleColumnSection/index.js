import React from 'react'
import './style.scss'

const SingleColumnSection = ({ title, children }) => {

	return (
		<div className="SingleColumnSection">
			<h3 className="SingleColumnSection--title">{title}</h3>
			<div className="SingleColumnSection--content">
				{children}
			</div>
		</div>
	)
}

export default SingleColumnSection