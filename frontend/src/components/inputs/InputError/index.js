import React from 'react'
import './style.scss'

const InputError = ({ text }) => {
	return (
		<span className="InputError">{text ? text : ''}</span>
	)
}

export default InputError