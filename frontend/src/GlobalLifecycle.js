import React, { Component } from 'react'
import { connect } from 'react-redux'


import * as ContentActions from './redux/content/actions'
import * as ContentSelectors from './redux/content/selectors'
import * as StaticContentActions from './redux/static/actions'
import * as StaticContentSelectors from './redux/static/selectors'

/* A component with the same lifecycle as the app in general. Use this
  to e.g. dispatch any Redux actions that you want to dispatch on every page load.

  Remember to render this in App.js
*/

class GlobalLifecycle extends Component {

	componentDidMount() {
		if (this.props.staticContentShouldUpdate) {
			this.props.updateStaticContent()
		}

		if (this.props.eventConceptsShouldUpdate) {
			this.props.updateEventConcepts()
		}
	}

	render() {
		return null
	}
}

const mapStateToProps = (state) => ({
	staticContentShouldUpdate: StaticContentSelectors.contentShouldUpdate(state),
	eventConceptsShouldUpdate: ContentSelectors.eventconceptsShouldUpdate(state),
})
const mapDispatchToProps = (dispatch) => ({
	updateStaticContent: () => dispatch(StaticContentActions.updateStaticContent()),
	updateEventConcepts: () => dispatch(ContentActions.updateEventConcepts())
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalLifecycle)
