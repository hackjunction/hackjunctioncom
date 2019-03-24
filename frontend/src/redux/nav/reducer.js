import * as ActionTypes from './actionTypes'
import { LOCATION_CHANGE } from 'connected-react-router'
import ReactGA from 'react-ga';
import config from '../../services/config'

if (config.GOOGLE_ANALYTICS_ID) {
	ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
} else {
	console.log('DEBUG: config variable GOOGLE_ANALYTICS_ID undefined, not initializing GA tracking')
}

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