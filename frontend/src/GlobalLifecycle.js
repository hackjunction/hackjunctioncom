import React from 'react'
import { connect } from 'react-redux'
import ReactPixel from 'react-facebook-pixel';

import * as ContentActions from './redux/content/actions'
import * as ContentSelectors from './redux/content/selectors'
import * as StaticContentActions from './redux/static/actions'
import * as StaticContentSelectors from './redux/static/selectors'
import * as MediaActions from './redux/media/actions'
import * as MediaSelectors from './redux/media/selectors'

/* A component with the same lifecycle as the app in general. Use this
  to e.g. dispatch any Redux actions that you want to dispatch on every page load.

  Remember to render this in App.js
*/

class GlobalLifecycle extends React.Component {

	componentDidMount() {
		if (this.props.staticContentShouldUpdate) {
			this.props.updateStaticContent()
		}

		if (this.props.eventConceptsShouldUpdate) {
			this.props.updateEventConcepts()
		}

		if (this.props.mediaShouldUpdate) {
			this.props.updateMedia()
		}

		ReactPixel.init('1999365573713460', {}, { autoConfig: true, debug: false })
		ReactPixel.pageView()
	}

	render() {
		return null
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
