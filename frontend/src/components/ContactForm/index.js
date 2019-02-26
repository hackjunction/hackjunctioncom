import React, { useState } from 'react'
import './style.scss'

import Form from '../inputs/Form'
import RadioButtons from '../inputs/RadioButtons'
import TextInput from '../inputs/TextInput'
import TextArea from '../inputs/TextArea'
import FormRow from '../inputs/FormRow'
import SubmitButton from '../inputs/SubmitButton'

import { useFormField } from '../../hooks/formhooks'
import { isEmail } from '../../utils/regex'

const ContactForm = () => {

	const fields = {
		firstName: {
			...useFormField('', (value) => {
				if (!value || value.length === 0) {
					return 'This field is required'
				}

				if (value.length > 100) {
					return "That's a pretty long name... Something shorter, please."
				}

				return null
			}),
		},
		lastName: {
			...useFormField('', (value) => {

				if (!value || value.length === 0) {
					return 'This field is required'
				}

				if (value.length > 100) {
					return "That's a pretty long name... Something shorter, please."
				}

				return null
			}),
		},
		email: {
			...useFormField('', (value) => {
				if (!isEmail(value)) {
					return 'This is not a valid email'
				}

				return null
			}),
		},
		contactReason: {
			...useFormField(null, (value) => {
				if (!value) {
					return 'Please choose one'
				}

				return null
			}),
		},
		message: {
			...useFormField('', (value) => {

				if (!value || value.length === 0) {
					return 'Please enter a message :)'
				}

				if (value.length > 200) {
					return 'Message can be at most 500 characters'
				}

				return null
			}),
		}
	}

	const [formLoading, setFormLoading] = useState(false)

	function handleFormSuccess(data) {
		console.log('SUCCESS', data)
	}

	function handleFormError(errors) {
		console.log('ERROR', errors)
	}

	return (
		<Form
			fields={fields}
			onError={handleFormError}
			onSuccess={handleFormSuccess}
		>
			<FormRow>
				<TextInput
					placeholder="First name"
					label="First name"
					{...fields.firstName}
				/>
				<TextInput
					placeholder="Last name"
					label="Last name"
					{...fields.lastName}
				/>
			</FormRow>
			<FormRow>
				<TextInput
					placeholder="Email"
					label="Email"
					{...fields.email}
				/>
			</FormRow>
			<FormRow>
				<RadioButtons
					label="I would like to be contacted regarding..."
					{...fields.contactReason}
					buttons={[
						{
							value: 'partnerships',
							label: 'partnerships'
						},
						{
							value: 'volunteering',
							label: 'volunteering'
						},
						{
							value: 'participating',
							label: 'participating'
						},
						{
							value: 'organizing',
							label: 'organizing'
						}
					]}
				/>
			</FormRow>
			<FormRow>
				<TextArea
					label="Message"
					placeholder="Type your message..."
					{...fields.message}
				/>
			</FormRow>
			<FormRow>
				<SubmitButton text="Send" />
			</FormRow>
		</Form>
	)
}

export default ContactForm