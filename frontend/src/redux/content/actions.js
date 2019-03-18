import * as ActionTypes from './actionTypes'

import EventService from '../../services/events'
import EventConceptService from '../../services/eventconcepts'
import TeamMemberService from '../../services/teammembers'
import TestimonialService from '../../services/testimonials'

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

const setTeamMembersLoading = () => dispatch => dispatch({ type: ActionTypes.SET_TEAM_MEMBERS_LOADING })
const setTeamMembersError = () => dispatch => dispatch({ type: ActionTypes.SET_TEAM_MEMBERS_ERROR })

export const updateTeamMembers = () => dispatch => {
	dispatch(setTeamMembersLoading())
	TeamMemberService.getAll().then(teammembers => {
		dispatch({
			type: ActionTypes.SET_TEAM_MEMBERS,
			payload: teammembers
		})
	}).catch(error => {
		console.log('Error in updateTeamMembers', error)
		dispatch(setTeamMembersError())
	})
}

const setTestimonialsLoading = () => dispatch => dispatch({ type: ActionTypes.SET_TESTIMONIALS_LOADING })
const setTestimonialsError = () => dispatch => dispatch({ type: ActionTypes.SET_TESTIMONIALS_ERROR })

export const updateTestimonials = () => dispatch => {
	dispatch(setTestimonialsLoading())
	TestimonialService.getAll().then(testimonials => {
		dispatch({
			type: ActionTypes.SET_TESTIMONIALS,
			payload: testimonials
		})
	}).catch(error => {
		console.log('Error in updateTestimonials', error)
		dispatch(setTestimonialsError())
	})
}