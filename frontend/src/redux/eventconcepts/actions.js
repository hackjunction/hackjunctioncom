import * as ActionTypes from './actionTypes';
import { eventconceptsShouldUpdate } from './selectors';

import EventConceptService from '../../services/eventconcepts';

export const updateEventConcepts = () => (dispatch, getState) => {
	if (!eventconceptsShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_EVENT_CONCEPTS,
		promise: EventConceptService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating event concepts', e),
		}
	})
};