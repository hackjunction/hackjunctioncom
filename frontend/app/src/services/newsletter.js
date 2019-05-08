import axios from './jsonAxios'
import config from './config'

const URL = config.API_BASE_URL + '/api/newsletter'

const NewsLetterService = {

	create: (formData) => {
		return axios.post(URL, formData);
	},
}

export default NewsLetterService