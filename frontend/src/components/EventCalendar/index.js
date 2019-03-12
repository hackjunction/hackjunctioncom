import React, { Component } from 'react'
import './style.scss'
import PropTypes from 'prop-types'
import _ from 'lodash'
import moment from 'moment-timezone'

import IconText from '../IconText'
import EventCalendarYear from './EventCalendarYear'

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
		const sorted = _.sortBy(events, e => e.begins)
		const groupedByYear = _.groupBy(sorted, e => moment(e.begins).format('YYYY'))

		const calendarYears = [];

		_.forOwn(groupedByYear, (events, year) => {
			calendarYears.push(
				<EventCalendarYear year={year} events={events} />
			)
		})

		return calendarYears;
	}

	render() {

		return (
			<div className="EventCalendar">
				<div className="EventCalendar--events">
					{this.renderEvents()}
				</div>
			</div>
		)
	}
}

export default EventCalendar
