import React, { useState } from 'react'
import './style.scss'

import { connect } from 'react-redux';

import Form from '../inputs/Form'
import RadioButtons from '../inputs/RadioButtons'
import TextInput from '../inputs/TextInput'
import TextArea from '../inputs/TextArea'
import FormRow from '../inputs/FormRow'
import SubmitButton from '../inputs/SubmitButton'
import BlockSection from '../BlockSection'

import { useFormField } from '../../hooks/formhooks'
import { isEmail } from '../../utils/regex'
import { minDelay, delay } from '../../utils/misc'

import ContactRequestService from '../../services/contactrequests'

import * as StaticContentSelectors from '../../redux/static/selectors';
import KEYS from '../../redux/static/keys';
import { objectWithKeys } from '../../redux/static/helpers';

const ContactForm = ({ allContent }) => {

	const content = objectWithKeys(allContent, [KEYS.contactFormTitle, KEYS.contactFormSubtitle]);

	console.log(content)

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
		company: {
			...useFormField('', (value) => {
				if (!value || value.length === 0) {
					return 'This field is required'
				}

				if (value.length > 100) {
					return "That's a pretty long company name... Something shorter, please."
				}
			})
		},
		message: {
			...useFormField('', (value) => {

				if (!value || value.length === 0) {
					return 'Please enter a message :)'
				}

				if (value.length > 500) {
					return 'Message can be at most 500 characters'
				}

				return null
			}),
		}
	}

	const [formLoading, setFormLoading] = useState(false)
	const [formError, setFormError] = useState(false)
	const [formSuccess, setFormSuccess] = useState(false)

	async function handleFormSuccess(data) {
		setFormLoading(true)

		minDelay(
			ContactRequestService.create(data),
			1000
		).then((res) => {
			setFormSuccess(true)
			setFormLoading(false)
		}).catch(e => {
			console.log('Form error', e)
			setFormError(true)
			setFormLoading(false)
		})
	}

	function handleFormError(errors) {
		console.log('ERROR', errors)
	}

	return (
		<BlockSection title={content.contactFormTitle} subtitle={content.contactFormSubtitle}>
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
					<TextInput
						placeholder="Company"
						label="Company"
						{...fields.company}
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
		</BlockSection>
	)
}

const mapStateToProps = (state) => ({
	allContent: StaticContentSelectors.content(state),
})

export default connect(mapStateToProps)(ContactForm)