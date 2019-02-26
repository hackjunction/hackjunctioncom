import React from 'react'
import './style.scss'

import TextareaAutosize from 'react-textarea-autosize';
import InputLabel from '../InputLabel'
import InputError from '../InputError'

const TextArea = ({ label, placeholder, value, error, onChange }) => {


	function handleChange(e) {
		onChange(e.target.value)
	}

	return (
		<div className="TextArea">
			<InputLabel text={label} show={value && value.length > 0} />
			<TextareaAutosize className="TextArea--input" minRows={5} placeholder={placeholder} value={value} onChange={handleChange} />
			<InputError text={error} />
		</div>
	)
}

export default TextArea