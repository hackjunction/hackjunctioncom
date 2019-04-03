import _ from 'lodash';
import * as ActionTypes from './actionTypes'

import StaticMediaService from '../../services/media';

const setStaticMediaLoading = () => ({ type: ActionTypes.SET_STATIC_MEDIA_LOADING });
const setStaticMediaError = () => ({ type: ActionTypes.SET_STATIC_MEDIA_ERROR });

export const updateStaticMedia = () => dispatch => {
	dispatch(setStaticMediaLoading());
	StaticMediaService.getAll().then(media => {
		const data = {}
		const keys = _.map(media, ({ key, media }) => {
			data[key.trim()] = media;
			return key.trim();
		})

		dispatch({
			type: ActionTypes.SET_STATIC_MEDIA,
			payload: {
				data,
				keys
			}
		})
	}).catch(e => {
		console.log('Error in updateStaticMedia', e);
		dispatch(setStaticMediaError());
	})
}