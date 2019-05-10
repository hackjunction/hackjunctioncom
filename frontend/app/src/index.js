import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CloudinaryContext } from 'cloudinary-react'
import LoadingPage from './pages/Loading';
import config from './services/config'

import configureStore from './redux/configureStore'

const { store, persistor } = configureStore()


const rootElement = document.getElementById("root");
const app = (
	<Provider store={store}>
		<PersistGate loading={<LoadingPage />} persistor={persistor}>
			<CloudinaryContext cloudName={config.CLOUDINARY_CLOUD_NAME}>
				<Router>
					<App />
				</Router>
			</CloudinaryContext>
		</PersistGate>
	</Provider>
);

// react-snap, see here: https://github.com/stereobooster/react-snap
if (rootElement.hasChildNodes()) {
	hydrate(app, rootElement);
} else {
	render(app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
