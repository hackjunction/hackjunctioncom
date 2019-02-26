import React from 'react'
import message from 'vanilla-antd-message'
import './style.scss'

import _ from 'lodash'

const Form = ({
	children,
	onSuccess = () => { },
	onError = () => { },
	fields,
	successMsg = 'Success!',
	errorMsg = 'Oops, something went wrong',
	msgDuration = 3000,
}) => {

	function handleSubmit(e) {
		e.preventDefault()

		let errors = {}
		let formData = {}

		_.forOwn(fields, (field, name) => {
			const errorMsg = field.validate(field.value)

			if (errorMsg) {
				field.setError(errorMsg)
				errors[name] = errorMsg
			} else {
				field.setError(null)
				formData[name] = field.value
			}
		})

		if (!_.isEmpty(errors)) {
			message.error(errorMsg, msgDuration)
			onError(errors)
		} else {
			message.error(successMsg, msgDuration)
			onSuccess(formData)
		}
	}

	return (
		<form className="Form" onSubmit={handleSubmit}>
			{children}
		</form>
	)
}

export default Form