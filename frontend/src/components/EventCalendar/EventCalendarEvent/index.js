import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import moment from 'moment-timezone'

import * as ContentSelectors from '../../../redux/content/selectors'

const DEFAULT_IMAGE = null

const EventCalendarEvent = ({ event, getDefaultImage }) => {

	function getEventColor() {
		return event.eventcategory ? event.eventcategory.hexColor : '#ffffff'
	}

	//TODO: Apply this image
	let image = DEFAULT_IMAGE

	if (event.eventconcept) {
		let conceptDefault = getDefaultImage(event.eventconcept.slug)
		image = conceptDefault ? conceptDefault.url : image
	}

	if (event.image) {
		image = event.image.url
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

const mapStateToProps = (state) => ({
	getDefaultImage: (slug) => ContentSelectors.eventconceptImage(slug)
})

export default connect(mapStateToProps)(EventCalendarEvent)