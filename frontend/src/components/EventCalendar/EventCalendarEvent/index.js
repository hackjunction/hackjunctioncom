import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'
import moment from 'moment-timezone'

const EventCalendarEvent = ({ event }) => {

	function getEventColor() {
		return event.eventcategory ? event.eventcategory.hexColor : '#ffffff'
	}

	return (
		<div className="EventCalendarEvent" style={{ '--theme-color': getEventColor() }}>
			<h4 className="EventCalendarEvent--name">{event.name}</h4>
			<div className="EventCalendarEvent--details">
				<div className="EventCalendarEvent--detail">
					<i className="EventCalendarEvent--detail__icon"></i>
					<span className="EventCalendarEvent--detail__text">{moment(event.begins).format('DD.MM.YYYY')}</span>
				</div>
				<div className="EventCalendarEvent--detail">
					<div className="EventCalendarEvent--detail__icon">
						<i className="EventCalendarEvent--detail__icon-inner"></i>
					</div>
					<span className="EventCalendarEvent--detail__text">{event.locationdescription}</span>
				</div>
			</div>
			<a className="EventCalendarEvent--pagelink" href={event.linkToEventSite}>
				<span className="EventCalendarEvent--pagelink__text">Event page</span>
			</a>
		</div>
	)
}

export default EventCalendarEvent