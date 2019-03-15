import * as ActionTypes from './actionTypes'

import StaticContentService from '../../services/staticcontent'


const setStaticContentLoading = () => dispatch => dispatch({ type: ActionTypes.SET_STATIC_CONTENT_LOADING })
const setStaticContentError = () => dispatch => dispatch({ type: ActionTypes.SET_STATIC_CONTENT_ERROR })

export const updateStaticContent = () => dispatch => {
	dispatch(setStaticContentLoading())
	StaticContentService.getAll().then(content => {
		dispatch({
			type: ActionTypes.SET_STATIC_CONTENT,
			payload: content,
		})
	}).catch(e => {
		console.log('Error in updateStaticContent', e)
		dispatch(setStaticContentError())
	})
}
