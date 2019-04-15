import * as ActionTypes from './actionTypes'
import { handle } from 'redux-pack';
import { map } from 'lodash-es';

export const initialState = {
	keys: [],
	data: {},
	loading: false,
	error: false,
	lastUpdate: 0,
}

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case ActionTypes.UPDATE_STATIC_MEDIA: {

			return handle(state, action, {
				start: prevState => ({ ...prevState, loading: true, error: false }),
				finish: prevState => ({ ...prevState, loading: false }),
				failure: prevState => ({ ...prevState, error: true }),
				success: prevState => {

					const data = {}
					const keys = map(action.payload, ({ key, media }) => {
						data[key.trim()] = media;
						return key.trim();
					})

					return {
						...prevState,
						data,
						keys,
						lastUpdate: Date.now()
					}
				},
			})
		}
		default: return state;
	}
}