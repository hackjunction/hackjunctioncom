import * as ActionTypes from './actionTypes'

export const initialState = {
	keys: [],
	data: {},
	loading: false,
	error: false,
	lastUpdate: 0,
}

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case ActionTypes.SET_STATIC_MEDIA: {

			return {
				...state,
				data: action.payload.data,
				keys: action.payload.keys,
				loading: false,
			}
		}
		case ActionTypes.SET_STATIC_MEDIA_LOADING: {

			return {
				...state,
				loading: true,
				error: false,
			}
		}
		case ActionTypes.SET_STATIC_MEDIA_ERROR: {
			return {
				...state,
				loading: false,
				error: true,
			}
		}
		default: return state
	}
}