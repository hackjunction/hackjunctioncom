import * as ActionTypes from './actionTypes'
import { LOCATION_CHANGE } from 'connected-react-router'

const intialState = {
	sidebarOpen: false,
}

export default function reducer(state = intialState, action) {
	switch (action.type) {
		case ActionTypes.TOGGLE_SIDEBAR: {
			return {
				...state,
				sidebarOpen: action.payload
			}
		}

		case LOCATION_CHANGE: {
			return {
				...state,
				sidebarOpen: false,
			}
		}
		default: return state
	}
}