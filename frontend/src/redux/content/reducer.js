import * as ActionTypes from './actionTypes'

export const initialState = {
	events: {
		data: [],
		loading: false,
		error: false,
		lastUpdate: 0,
	},
	eventconcepts: {
		data: [],
		loading: false,
		error: false,
		lastUpdate: 0,
	},
	teammembers: {
		data: [],
		loading: false,
		error: false,
		lastUpdate: 0,
	}
}

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case ActionTypes.SET_EVENTS: {
			return {
				...state,
				events: {
					...state.events,
					data: action.payload,
					loading: false,
					lastUpdate: Date.now(),
				}
			}
		}
		case ActionTypes.SET_EVENTS_LOADING: {
			return {
				...state,
				events: {
					...state.events,
					loading: true,
					error: false
				}
			}
		}
		case ActionTypes.SET_EVENTS_ERROR: {
			return {
				...state,
				events: {
					...state.events,
					loading: false,
					error: true,
				}
			}
		}

		case ActionTypes.SET_EVENT_CONCEPTS: {
			return {
				...state,
				eventconcepts: {
					...state.eventconcepts,
					data: action.payload,
					loading: false,
					lastUpdate: Date.now()
				}
			}
		}
		case ActionTypes.SET_EVENT_CONCEPTS_LOADING: {
			return {
				...state,
				eventconcepts: {
					...state.eventconcepts,
					loading: true,
					error: false,
				}
			}
		}
		case ActionTypes.SET_EVENT_CONCEPTS_ERROR: {
			return {
				...state,
				eventconcepts: {
					...state.eventconcepts,
					loading: false,
					error: true,
				}
			}
		}

		case ActionTypes.SET_TEAM_MEMBERS: {
			return {
				...state,
				teammembers: {
					...state.teammembers,
					loading: false,
					data: action.payload,
					lastUpdate: Date.now()
				}
			}
		}
		case ActionTypes.SET_TEAM_MEMBERS_LOADING: {
			return {
				...state,
				teammembers: {
					...state.teammembers,
					loading: true,
					error: false,
				}
			}
		}
		case ActionTypes.SET_TEAM_MEMBERS_ERROR: {
			return {
				...state,
				teammembers: {
					...state.teammembers,
					loading: false,
					error: true,
				}
			}
		}
		default: return state
	}
}