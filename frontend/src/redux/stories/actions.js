import * as ActionTypes from './actionTypes';
import StoriesService from '../../services/stories';
import { storiesShouldUpdate } from './selectors';

/**
 * News stories
 */

export const updateStories = () => (dispatch, getState) => {
	if (!storiesShouldUpdate(getState())) {
		return
	}

	dispatch({
		type: ActionTypes.UPDATE_STORIES,
		promise: StoriesService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating stories', e)
		}
	})
}
