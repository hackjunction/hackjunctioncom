import * as ActionTypes from './actionTypes'
import FAQService from '../../services/faq'
import { contentShouldUpdate } from './selectors'

export const updateFAQ = () => (dispatch, getState) => {
	if (!FAQShouldUpdate(getState())) {
		return
	}

	dispatch({
		type: ActionTypes.UPDATE_FAQ,
		promise: FAQService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating FAQ', e)
		}
	})
}
