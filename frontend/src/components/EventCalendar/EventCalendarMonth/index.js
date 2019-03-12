import React from 'react'
import './style.scss'

import _ from 'lodash'

import BlockSection from '../../BlockSection'
import EventCalendarEvent from '../EventCalendarEvent'

const EventCalendarMonth = ({ month, year, events }) => {

	function renderEvents() {
		return _.map(events, e => {
			return (
				<EventCalendarEvent event={e} />
			)
		})
	}

	return (
		<div className="EventCalendarMonth">
			<BlockSection title={month} subtitle={year}>
				<div className="EventCalendarMonth--events">
					{renderEvents()}
				</div>
			</BlockSection>
		</div>
	)
}

export default EventCalendarMonth