import * as ActionTypes from './actionTypes';

const initialState = {
	data: [],
	loading: false,
	error: false,
	lastUpdate: 0
};

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case ActionTypes.SET_TESTIMONIALS: {
			return {
				...state,
				data: action.payload,
				loading: false,
				lastUpdate: Date.now(),
			}
		}
		case ActionTypes.SET_TESTIMONIALS_LOADING: {
			return {
				...state,
				loading: true,
				error: false,
			}
		}
		case ActionTypes.SET_TESTIMONIALS_ERROR: {
			return {
				...state,
				loading: false,
				error: true,
			}
		}
		default: return state;
	}
}
