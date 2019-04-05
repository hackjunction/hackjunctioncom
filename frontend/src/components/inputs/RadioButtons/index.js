import React from 'react'
import './style.scss'
import { map } from 'lodash-es';

import InputLabel from '../InputLabel'
import InputError from '../InputError'

const RadioButtons = ({ label, buttons, value, error, onChange }) => {

	function renderButtons() {
		return map(buttons, button => {
			const selected = button.value === value
			return (
				<button
					key={button.value}
					className={`RadioButtons--button ${selected ? 'selected' : ''}`}
					onClick={() => onChange(button.value)}
					type="button"
				>
					<span className="RadioButtons--button__text">{button.label}</span>
				</button>
			)
		})
	}

	return (
		<div className="RadioButtons">
			<InputLabel text={label} show={true} hasMarginBottom large />
			<div className="RadioButtons--buttons">
				{renderButtons()}
			</div>
			<InputError text={error} />
		</div>
	)
}

export default RadioButtons