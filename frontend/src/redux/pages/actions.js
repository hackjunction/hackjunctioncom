
import * as ActionTypes from './actionTypes';
import PageService from '../../services/pages';
import { pagesShouldUpdate } from './selectors';

export const updatePages = () => (dispatch, getState) => {
	if (!pagesShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_PAGES,
		promise: PageService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating pages', e)
		}
	})
};
