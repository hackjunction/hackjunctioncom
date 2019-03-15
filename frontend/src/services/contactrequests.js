import axios from 'axios'

const BASE_URL = '/api/contactrequests'

const ContactRequestService = {

	create: (formData) => {
		return axios.post(BASE_URL, formData).then(res => res.data)
	},
}

export default ContactRequestService