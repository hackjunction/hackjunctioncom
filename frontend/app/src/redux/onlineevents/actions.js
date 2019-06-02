
import * as ActionTypes from './actionTypes';
import OnlineEventService from '../../services/onlineevents';
import { onlineEventsShouldUpdate } from './selectors';

export const updateOnlineEvents = () => (dispatch, getState) => {
	if (!onlineEventsShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_ONLINE_EVENTS,
		promise: OnlineEventService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating pages', e)
		}
	})
};
