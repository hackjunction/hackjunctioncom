import * as ActionTypes from './actionTypes'
import StaticContentService from '../../services/staticcontent'
import { contentShouldUpdate } from './selectors'

export const updateStaticContent = () => (dispatch, getState) => {
	if (!contentShouldUpdate(getState())) {
		return
	}

	dispatch({
		type: ActionTypes.UPDATE_STATIC_CONTENT,
		promise: StaticContentService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating static content', e)
		}
	})
}
