import React from 'react'
import './style.scss'

import moment from 'moment-timezone'

const EventCalendarEvent = ({ event }) => {

	return (
		<div className="EventCalendarEvent">
			<div className="EventCalendarEvent--date">
				<span className="EventCalendarEvent--date-value">{moment(event.begins).format('Do')}</span>
			</div>
			<div className="EventCalendarEvent--details">
				<span className="EventCalendarEvent--details__name">{event.name}</span>
				<span className="EventCalendarEvent--details__place">{event.place || 'Dipoli Conference center'}</span>
				<span className="EventCalendarEvent--details__time">{moment(event.begins).format('HH:mm')}</span>
			</div>
		</div>
	)
}

export default EventCalendarEvent