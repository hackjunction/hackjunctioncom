import * as ActionTypes from './actionTypes'

import EventService from '../../services/events'
import EventConceptService from '../../services/eventconcepts'

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

const setEventConceptsLoading = () => dispatch => dispatch({ type: ActionTypes.SET_EVENT_CONCEPTS_LOADING })
const setEventConceptsError = () => dispatch => dispatch({ type: ActionTypes.SET_EVENT_CONCEPTS_ERROR })

export const updateEventConcepts = () => dispatch => {
	dispatch(setEventConceptsLoading())
	EventConceptService.getAll().then(eventconcepts => {
		dispatch({
			type: ActionTypes.SET_EVENT_CONCEPTS,
			payload: eventconcepts
		})
	}).catch(error => {
		console.log('Error in updateEventConcepts', error)
		dispatch(setEventConceptsError())
	})
}