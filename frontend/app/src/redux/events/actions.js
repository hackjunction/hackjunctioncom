import * as ActionTypes from './actionTypes';
import EventService from '../../services/events';
import { eventsShouldUpdate } from './selectors';

export const updateEvents = () => (dispatch, getState) => {
	if (!eventsShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_EVENTS,
		promise: EventService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating events', e)
		}
	})
};

