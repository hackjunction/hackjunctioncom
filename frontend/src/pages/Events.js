import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

import EventService from '../services/events'


import EventCalendar from '../components/EventCalendar'
import EventMap from '../components/EventMap'

class Events extends Component {

	constructor(props) {
		super(props)

		this.state = {
			events: []
		}
	}

	componentDidMount() {
		EventService.getAll().then(events => {
			this.setState({ events })
		})
	}


	render() {

		const { events } = this.state

		return (
			<div className="PageWrapper Events">
				<EventMap events={events} />
				<div className="PageWrapper--Content">
					<EventCalendar events={events} />
				</div>
			</div>
		)
	}
}

export default Events