import * as ActionTypes from './actionTypes'

export const toggleSidebar = (open) => dispatch => {
	dispatch({
		type: ActionTypes.TOGGLE_SIDEBAR,
		payload: open
	})
}