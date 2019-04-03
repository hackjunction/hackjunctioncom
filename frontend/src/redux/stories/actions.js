import * as ActionTypes from './actionTypes';

import StoriesService from '../../services/stories';

/**
 * News stories
 */

const setStoriesLoading = () => ({ type: ActionTypes.SET_STORIES_LOADING });
const setStoriesError = () => ({ type: ActionTypes.SET_STORIES_ERROR });

export const updateStories = () => dispatch => {
	dispatch(setStoriesLoading())
	StoriesService.getAll()
		.then(stories => {
			dispatch({
				type: ActionTypes.SET_STORIES,
				payload: stories
			})
		})
		.catch(error => {
			console.log('Error in updateStories', error)
			dispatch(setStoriesError())
		})
}
