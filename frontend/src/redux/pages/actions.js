
import * as ActionTypes from './actionTypes';

import PageService from '../../services/pages';

const setPagesLoading = () => ({ type: ActionTypes.SET_PAGES_LOADING });
const setPagesError = () => ({ type: ActionTypes.SET_PAGES_ERROR });

export const updatePages = () => dispatch => {
	dispatch(setPagesLoading());
	PageService.getAll()
		.then(pages => {
			dispatch({
				type: ActionTypes.SET_PAGES,
				payload: pages
			});
		})
		.catch(error => {
			console.log('Error in updatePages', error);
			dispatch(setPagesError());
		});
};
