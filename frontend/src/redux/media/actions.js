import * as ActionTypes from './actionTypes'

import MediaService from '../../services/media'


const setMediaLoading = () => dispatch => dispatch({ type: ActionTypes.SET_MEDIA_LOADING })
const setMediaError = () => dispatch => dispatch({ type: ActionTypes.SET_MEDIA_ERROR })

export const updateMedia = () => dispatch => {
	dispatch(setMediaLoading())
	MediaService.getAll().then(media => {
		dispatch({
			type: ActionTypes.SET_MEDIA,
			payload: media
		})
	}).catch(e => {
		console.log('Error in updateMedia', e)
		dispatch(setMediaError())
	})
}