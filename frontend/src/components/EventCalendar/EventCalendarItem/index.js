import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment-timezone'

import './style.scss'

class EventCalendarItem extends Component {
	static propTypes = {
		event: PropTypes.object,
	}

	render() {
		const { event } = this.props

		return (
			<div className="EventCalendarItem">
				<div className="EventCalendarItem_Date">
					<span className="EventCalendarItem_Date-day">{moment(event.begins).format('Do')}</span>
					<span className="EventCalendarItem_Date-month">{moment(event.begins).format('MMM')}</span>
				</div>
				<div className="EventCalendarItem_Info">
					<h4>{event.name}</h4>
					<p>{event.shortDescription}</p>
					<div className="EventCalendarItem_Info-links">
						{event.linkToEventSite ? <a href={event.linkToEventSite}>Event site</a> : null}
						{event.linkToTickets ? <a href={event.linkToTickets}>Tickets</a> : null}
					</div>
				</div>
			</div>
		)
	}
}

export default EventCalendarItem