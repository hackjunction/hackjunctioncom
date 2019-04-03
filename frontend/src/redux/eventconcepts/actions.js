import * as ActionTypes from './actionTypes';

import EventConceptService from '../../services/eventconcepts';

const setEventConceptsLoading = () => ({ type: ActionTypes.SET_EVENT_CONCEPTS_LOADING });
const setEventConceptsError = () => ({ type: ActionTypes.SET_EVENT_CONCEPTS_ERROR });

export const updateEventConcepts = () => dispatch => {
	dispatch(setEventConceptsLoading());
	EventConceptService.getAll()
		.then(eventconcepts => {
			dispatch({
				type: ActionTypes.SET_EVENT_CONCEPTS,
				payload: eventconcepts
			});
		})
		.catch(error => {
			console.log('Error in updateEventConcepts', error);
			dispatch(setEventConceptsError());
		});
};