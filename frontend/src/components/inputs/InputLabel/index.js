import React from 'react'
import './style.scss'

const InputLabel = ({ text, show, hasMarginBottom, large }) => {

	let className = 'InputLabel';

	if (show) className += ' InputLabel-show'
	if (hasMarginBottom) className += ' InputLabel-has-mb'
	if (large) className += ' InputLabel-large'

	return (
		<span className={className}>{text ? text : ''}</span>
	)
}

export default InputLabel