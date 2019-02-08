import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import moment from 'moment-timezone'

class EventMapPopup extends Component {

	static propTypes = {
		event: PropTypes.object,
	}

	render() {

		const { event } = this.props;

		return (
			<div className="EventMapPopup">
				<h6>{event.name}</h6>
				<p>{moment(event.begins).format('DD.MM.YYYY')}</p>
				<p>{event.shortDescription}</p>
			</div>
		)
	}
}

export default EventMapPopup