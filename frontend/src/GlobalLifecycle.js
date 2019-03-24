import React from 'react'
import { connect } from 'react-redux'
import ReactPixel from 'react-facebook-pixel'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga';
import config from './services/config'

import * as ContentActions from './redux/content/actions'
import * as ContentSelectors from './redux/content/selectors'
import * as StaticContentActions from './redux/static/actions'
import * as StaticContentSelectors from './redux/static/selectors'
import * as MediaActions from './redux/media/actions'
import * as MediaSelectors from './redux/media/selectors'

/* A component with the same lifecycle as the app in general. Use this
  to e.g. dispatch any Redux actions that you want to dispatch on every page load.

  Also renders any dynamic changes to the HTML <head/> with react-helmet

  Remember to render this in App.js
*/

class GlobalLifecycle extends React.Component {

	componentDidMount() {

		if (config.IS_DEBUG) {
			console.log('DEBUG ENABLED:', config.IS_DEBUG)
			console.log('ENV:', process.env)
			console.log('CONFIG:', config)
		}

		if (this.props.staticContentShouldUpdate) {
			this.props.updateStaticContent()
		}

		if (this.props.eventConceptsShouldUpdate) {
			this.props.updateEventConcepts()
		}

		if (this.props.mediaShouldUpdate) {
			this.props.updateMedia()
		}

		if (config.FACEBOOK_PIXEL_ID) {
			ReactPixel.init(config.FACEBOOK_PIXEL_ID, {}, { autoConfig: true, debug: false })
			ReactPixel.pageView()
		} else {
			if (config.IS_DEBUG) {
				console.log('DEBUG: config variable FACEBOOK_PIXEL_ID undefined, not initializing FB pixel tracking')
			}
		}

		if (config.GOOGLE_ANALYTICS_ID) {
			ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
		} else {
			if (config.IS_DEBUG) {
				console.log('DEBUG: config variable GOOGLE_ANALYTICS_ID undefined, not initializing GA tracking')
			}
		}


	}

	render() {
		return (
			<Helmet
				titleTemplate="Junction | %s"
			>
				<title>Hack the Future</title>
			</Helmet>
		)
	}
}

const mapStateToProps = (state) => ({
	staticContentShouldUpdate: StaticContentSelectors.contentShouldUpdate(state),
	eventConceptsShouldUpdate: ContentSelectors.eventconceptsShouldUpdate(state),
	mediaShouldUpdate: MediaSelectors.mediaShouldUpdate(state)
})
const mapDispatchToProps = (dispatch) => ({
	updateStaticContent: () => dispatch(StaticContentActions.updateStaticContent()),
	updateEventConcepts: () => dispatch(ContentActions.updateEventConcepts()),
	updateMedia: () => dispatch(MediaActions.updateMedia())
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalLifecycle)
