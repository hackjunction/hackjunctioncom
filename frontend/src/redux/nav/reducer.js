import * as ActionTypes from './actionTypes'
import { LOCATION_CHANGE } from 'connected-react-router'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-93845396-2');

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
			ReactGA.pageview(window.location.pathname + window.location.search);
			return {
				...state,
				sidebarOpen: false,
			}
		}
		default: return state
	}
}