import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CloudinaryContext } from 'cloudinary-react'

import configureStore, { history } from './redux/configureStore'

const { store, persistor } = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<CloudinaryContext cloudName="hackjunction">
				<App history={history} />
			</CloudinaryContext>
		</PersistGate>
	</Provider>
	, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
