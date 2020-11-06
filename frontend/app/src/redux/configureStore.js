import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import createRootReducer from './rootReducer'

const persistConfig = {
  key: 'hackjunctioncom',
  storage,
  whitelist: [
    'staticcontent',
    'staticmedia',
    'faq',
    'job',
    'events',
    'eventconcepts',
    'kpis',
    'pages',
    'partners',
    'socialmedias',
    'stories',
    'teammembers',
    'testimonials',
    'tracks',
    'challenges',
    'schedules',
    'onlineevents',
    'misc',
    'hubs',
  ],
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, createRootReducer())

export default (preloadedState) => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        reduxPackMiddleware
        // ... other middlewares ...
      )
    )
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
