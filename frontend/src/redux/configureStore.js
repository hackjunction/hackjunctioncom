import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer, purgeStoredState } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import createRootReducer from './rootReducer'

const persistConfig = {
	key: 'hackjunctioncom',
	storage,
	whitelist: [
		'staticcontent',
		'staticmedia',
		'events',
		'eventconcepts',
		'kpis',
		'pages',
		'partners',
		'socialmedias',
		'stories',
		'teammembers',
		'testimonials',
	],
	stateReconciler: autoMergeLevel2,
}

export const history = createBrowserHistory()

const persistedReducer = persistReducer(persistConfig, createRootReducer(history))

export default (preloadedState) => {
	const store = createStore(
		persistedReducer,
		preloadedState,
		composeWithDevTools(
			applyMiddleware(
				routerMiddleware(history), // for dispatching history actions
				thunk,
				// ... other middlewares ...
			),
		),
	)
	const persistor = persistStore(store)
	persistor.purge();
	return { store, persistor }
}