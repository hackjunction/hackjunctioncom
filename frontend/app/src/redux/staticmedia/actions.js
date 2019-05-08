import * as ActionTypes from './actionTypes'
import StaticMediaService from '../../services/media';
import { mediaShouldUpdate } from './selectors';

export const updateStaticMedia = () => (dispatch, getState) => {
	if (!mediaShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_STATIC_MEDIA,
		promise: StaticMediaService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating static media', e)
		}
	})
}