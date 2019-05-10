import * as ActionTypes from './actionTypes';
import { REHYDRATE } from 'redux-persist';

const initialState = {
	cookiesAccepted: false,
	rehydrated: false,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SET_COOKIES_ACCEPTED: {
			return {
				...state,
				cookiesAccepted: action.payload
			}
		}
		case REHYDRATE: {
			if (action.payload) {
				return {
					...action.payload.misc,
					rehydrated: true,
				}
			}
			return {
				...state,
				rehydrated: true,
			}
		}
		default: return state;
	}
}