import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import IconText from '../IconText'
import EventCalendarItem from './EventCalendarItem'

import EventService from '../../services/events'

class EventCalendar extends Component {
	static propTypes = {
		events: PropTypes.array,
	}

	constructor(props) {
		super(props)

		this.state = {
			events: this.props.events || []
		}

		this.updateEvents = this.updateEvents.bind(this)
	}

	componentDidMount() {
		if (!Array.isArray(this.state.events) || this.state.events.length === 0) {
			this.updateEvents()
		}
	}

	async updateEvents() {
		await this.setState({
			eventsError: null,
			eventsLoading: true
		})

		try {
			const events = await EventService.getAll()
			this.setState({
				eventsLoading: false,
				events
			})
		} catch (e) {
			console.log(e)
			this.setState({
				eventsLoading: false,
				eventsError: 'Unable to get events'
			})
		}
	}

	renderEvents() {

		const { events } = this.state

		return _.map(events, (event) => <EventCalendarItem event={event} />)
	}

	render() {

		const { eventsLoading, eventsError } = this.state;

		return (
			<div className="EventCalendar">
				{eventsLoading ? <IconText icon="fas fa-spinner fa-spin" text="Loading events" /> : null}
				{eventsError ? <IconText icon="fas fa-skull-crossbones" text="Couldn't get events" cta="Try again" onClick={this.updateEvents} /> : null}
				<div className="EventCalendar_Events">
					{!eventsLoading && !eventsError ? this.renderEvents() : null}
				</div>
			</div>
		)
	}
}

export default EventCalendar
