import axios from 'axios'
import BASE_URL from './baseUrl'

const URL = BASE_URL + '/api/contactrequests'

const ContactRequestService = {

	create: (formData) => {
		return axios.post(URL, formData).then(res => res.data)
	},
}

export default ContactRequestService