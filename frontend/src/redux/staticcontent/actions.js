import _ from 'lodash';
import * as ActionTypes from './actionTypes'

import StaticContentService from '../../services/staticcontent'

const setStaticContentLoading = () => ({ type: ActionTypes.SET_STATIC_CONTENT_LOADING })
const setStaticContentError = () => ({ type: ActionTypes.SET_STATIC_CONTENT_ERROR })

export const updateStaticContent = () => dispatch => {
	dispatch(setStaticContentLoading())
	StaticContentService.getAll().then(content => {
		const data = {}
		console.log('GOT DATA', content);
		const keys = _.map(content, ({ key, content }) => {
			data[key.trim()] = content;
			return key.trim();
		});

		dispatch({
			type: ActionTypes.SET_STATIC_CONTENT,
			payload: {
				data,
				keys
			}
		})
	}).catch(e => {
		console.log('Error in updateStaticContent', e)
		dispatch(setStaticContentError())
	})
}
