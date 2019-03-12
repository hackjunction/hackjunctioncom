import axios from 'axios'

const BASE_URL = '/api/eventcategories'

const EventCategoryService = {

	count: () => {
		return axios.get(`${BASE_URL}/count`).then(res => res.data)
	},

	getAll: () => {
		return axios.get(BASE_URL).then(res => res.data)
	},

	getOne: (id) => {
		return axios.get(`${BASE_URL}/${id}`).then(res => res.data)
	}
}

export default EventCategoryService