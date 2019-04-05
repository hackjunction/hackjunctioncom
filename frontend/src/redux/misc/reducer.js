import * as ActionTypes from './actionTypes';

const initialState = {
	cookiesAccepted: false,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SET_COOKIES_ACCEPTED: {
			return {
				...state,
				cookiesAccepted: action.payload
			}
		}
		default: return state;
	}
}