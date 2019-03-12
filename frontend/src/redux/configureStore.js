import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, purgeStoredState } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import createRootReducer from './rootReducer'

const persistConfig = {
	key: 'hackjunctioncom',
	storage,
	blacklist: ['router']
}

export const history = createBrowserHistory()

const persistedReducer = persistReducer(persistConfig, createRootReducer(history))

export default (preloadedState) => {
	const store = createStore(
		persistedReducer,
		preloadedState,
		compose(
			applyMiddleware(
				routerMiddleware(history), // for dispatching history actions
				thunk,
				// ... other middlewares ...
			),
		),
	)
	const persistor = persistStore(store)
	return { store, persistor }
}