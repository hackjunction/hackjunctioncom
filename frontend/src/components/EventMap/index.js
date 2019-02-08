import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import ReactMapGL, { Popup } from 'react-map-gl';

import _ from 'lodash'

import EventMapMarker from './EventMapMarker'
import EventMapPopup from './EventMapPopup'

const MapConfig = {
	accessToken: 'pk.eyJ1IjoibGFwcGFsajQiLCJhIjoiY2pycnU5bDB4MGN0aDQ0bXFwczBydmoxYyJ9.SbD0mhc45yucBkF_0i3pag',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [0, 30], // Helsinki
	defaultZoom: [1],
}


class EventMap extends Component {

	static propTypes = {
		events: PropTypes.array
	}

	constructor(props) {
		super(props)

		this.state = {
			mapState: {
				longitude: 0,
				latitude: 30,
				zoom: 1
			},
			popupInfo: null
		}
	}

	renderEventMarkers() {
		const { events } = this.props;
		return _.map(events, e => <EventMapMarker event={e} onClick={() => this.setState({ popupInfo: e })} />)
	}

	renderPopup() {

		const { popupInfo } = this.state

		return popupInfo && (
			<Popup
				latitude={popupInfo.latitude}
				longitude={popupInfo.longitude}
				closeButton={false}
				closeOnClick={false}
				tipSize={0}
				onClose={() => this.setState({ popupInfo: null })}
				anchor="top"
				className="EventMap_PopupContainer"
			>
				<EventMapPopup event={popupInfo} />
			</Popup>
		)
	}

	render() {

		return (
			<div className="EventMap">
				<div className="EventMap_Map">
					<ReactMapGL
						{...this.state.mapState}
						mapStyle={MapConfig.style}
						mapboxApiAccessToken={MapConfig.accessToken}
						width={'100%'}
						height={600}
						onViewportChange={(viewport) => {
							this.setState({
								mapState: {
									longitude: viewport.longitude,
									latitude: viewport.latitude,
									zoom: viewport.zoom
								}
							})
						}}
					>
						{this.renderEventMarkers()}
						{this.renderPopup()}
					</ReactMapGL>
				</div>
			</div>
		)
	}
}

export default EventMap