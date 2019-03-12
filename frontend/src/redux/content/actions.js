import * as ActionTypes from './actionTypes'

import EventService from '../../services/events'

const setEventsLoading = () => dispatch => dispatch({ type: ActionTypes.SET_EVENTS_LOADING })
const setEventsError = () => dispatch => dispatch({ type: ActionTypes.SET_EVENTS_ERROR })

export const updateEvents = () => dispatch => {
	dispatch(setEventsLoading())
	EventService.getAll().then(events => {
		dispatch({
			type: ActionTypes.SET_EVENTS,
			payload: events,
		})
	}).catch(error => {
		console.log('Error in updateEvents', error)
		dispatch(setEventsError())
	})
}

