import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import { Marker } from 'react-map-gl';

class EventMapMarker extends Component {

	static propTypes = {
		event: PropTypes.object,
		onClick: PropTypes.func
	}

	render() {

		const { event, onClick } = this.props

		if (isNaN(event.latitude) || isNaN(event.longitude)) {
			return null
		}

		return (
			<React.Fragment>
				<Marker
					latitude={[event.latitude]}
					longitude={[event.longitude]}
				>
					<div className="EventMapMarker">
						<div className="EventMapMarker_Circle" onClick={onClick} />
					</div>
				</Marker>
			</React.Fragment>
		)
	}
}

export default EventMapMarker