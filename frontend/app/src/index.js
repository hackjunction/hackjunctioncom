import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={<LoadingPage />} persistor={persistor}>
			<CloudinaryContext cloudName={config.CLOUDINARY_CLOUD_NAME}>
				<Router>
					<App />
				</Router>
			</CloudinaryContext>
		</PersistGate>
	</Provider>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
