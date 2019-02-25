import React from 'react'
import './style.scss'

const ContactForm = () => {

	return (
		<div className="ContactForm">
			<div className="ContactForm--row">
				<input className="ContactForm--input" type="text" placeholder="First name" />
				<div className="ContactForm--spacer-md" />
				<input className="ContactForm--input" type="text" placeholder="Last name" />
			</div>
			<div className="ContactForm--spacer-md" />
			<div className="ContactForm--row">
				<input className="ContactForm--input" type="text" placeholder="Email" />
			</div>
		</div>
	)
}

export default ContactForm