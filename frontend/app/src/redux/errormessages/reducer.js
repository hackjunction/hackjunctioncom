import * as ActionTypes from './actionTypes';
import { handle } from 'redux-pack';

const initialState = {
	data: [],
	loading: false,
	error: false,
	lastUpdate: 0
};

export default function reducer(state = initialState, action) {

	switch (action.type) {
		case ActionTypes.UPDATE_ERROR_MESSAGES: {
			return handle(state, action, {
				start: prevState => ({ ...prevState, loading: true, error: false }),
				finish: prevState => ({ ...prevState, loading: false }),
				failure: prevState => ({ ...prevState, error: true }),
				success: prevState => {

					const data = {};
					action.payload.forEach((item, index) => {
						data[item.key] = item;
					})

					return {
						...prevState,
						data,
						lastUpdate: Date.now()	
					}
				},
			})
		}
		default: return state;
	}
}
