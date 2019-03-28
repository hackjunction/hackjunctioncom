import React from 'react'
import './style.scss'

import InputLabel from '../InputLabel';
import InputError from '../InputError';

const DropDown = ({ options, label, placeholder, value, error, onChange }) => {

	function handleChange(e) {
		onChange(e.target.value)
	}

	function renderOptions() {
		return options.map(option => {
			return <option value={option.value}>{option.label}</option>
		})
	}

	return (
		<div className="DropDown">
			<InputLabel text={label} show={value && value.length > 0} />
			<select className="DropDown--input" onChange={handleChange} value={value}>
				<option value="" disabled selected>{placeholder}</option>
				{renderOptions()}
			</select>
			<InputError text={error} />
		</div>
	)
}

export default DropDown