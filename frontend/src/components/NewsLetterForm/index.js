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
import { minDelay, delay } from '../../utils/misc'

import ContactRequestService from '../../services/contactrequests'

const NewsLetterForm = () => {

	const fields = {
		email: {
			...useFormField('', (value) => {
				if (!isEmail(value)) {
					return 'This is not a valid email'
				}

				return null
			}),
		},
		country: {
			...useFormField('', value => {
				return null;
			})
		}
	}

	const [formLoading, setFormLoading] = useState(false)
	const [formError, setFormError] = useState(false)
	const [formSuccess, setFormSuccess] = useState(false)

	async function handleFormSuccess(data) {
		console.log('SUXXESS', data)
	}

	function handleFormError(errors) {
		console.log('ERROR', errors)
	}

	return (
		<Form
			fields={fields}
			onError={handleFormError}
			onSuccess={handleFormSuccess}
			loading={formLoading}
			error={formError}
			success={formSuccess}
			errorTitle={'Oops, something went wrong'}
			errorMessage={'Are you connected to the internet? Please try again.'}
			successTitle={'Thanks for getting in touch!'}
			successMessage={'We\'ll get back to you A.S.A.P'}
		>
			<FormRow>
				<TextInput
					placeholder="Email"
					label="Email"
					{...fields.email}
				/>
				<TextInput
					placeholder="Country"
					label="Country"
					{...fields.country}
				/>
			</FormRow>
			<FormRow>
				<SubmitButton text="Subscribe" />
			</FormRow>
		</Form>
	)
}

export default NewsLetterForm