import * as ActionTypes from './actionTypes'
import ErrorMessagesService from '../../services/errormessages'
import { errorMessagesShouldUpdate } from './selectors'

export const updateErrorMessages = () => (dispatch, getState) => {
	if (!errorMessagesShouldUpdate(getState())) {
		return
	}

	dispatch({
		type: ActionTypes.UPDATE_ERROR_MESSAGES,
		promise: ErrorMessagesService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating error messages', e)
		}
	})
}
