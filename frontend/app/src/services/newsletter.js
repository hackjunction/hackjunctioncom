import axios from 'axios'
import config from './config'

const URL = config.API_BASE_URL + '/api/newsletter'

const NewsLetterService = {

	create: (formData) => {
		return axios.post(URL, formData).then(res => res.data)
	},
}

export default NewsLetterService