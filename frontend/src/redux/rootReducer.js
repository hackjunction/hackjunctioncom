import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// Import the reducer from each module here, and add it to the combined reducer
import content from './content/reducer'
import nav from './nav/reducer'

export default (history) => combineReducers({
	router: connectRouter(history),
	content,
	nav
});
