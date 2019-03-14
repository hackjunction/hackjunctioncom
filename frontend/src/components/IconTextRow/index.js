import React from 'react'
import './style.scss'

const IconTextRow = ({ icon, text }) => {
	return (
		<div className="IconTextRow">
			<div className="IconTextRow--icon">
				<i className="IconTextRow--icon-content"></i>
			</div>
			<span className="IconTextRow--text">{text}</span>
		</div>
	)
}

export default IconTextRow