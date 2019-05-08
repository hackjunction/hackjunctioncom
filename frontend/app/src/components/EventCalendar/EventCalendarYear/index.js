import React from 'react'
import './style.scss'

import moment from 'moment'
import { forOwn, groupBy } from 'lodash-es'

import EventCalendarMonth from '../EventCalendarMonth'

const EventCalendarYear = ({ year, events }) => {

	function renderEvents() {
		const groupedByMonth = groupBy(events, e => moment(e.begins).format('MMMM'))
		const calendarMonths = []

		forOwn(groupedByMonth, (events, month) => {
			calendarMonths.push(
				<EventCalendarMonth key={month} year={year} month={month} events={events} />
			)
		})

		return calendarMonths
	}

	return (
		<div className="EventCalendarYear">
			<div className="EventCalendarYear--events">
				{renderEvents()}
			</div>
		</div>
	)
}

export default EventCalendarYear