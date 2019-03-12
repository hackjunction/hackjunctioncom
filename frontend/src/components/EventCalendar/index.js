import React, { useEffect } from 'react'
import './style.scss'
import _ from 'lodash'
import moment from 'moment-timezone'
import { connect } from 'react-redux'

import IconText from '../IconText'
import EventCalendarYear from './EventCalendarYear'

import * as ContentSelectors from '../../redux/content/selectors'
import * as ContentActions from '../../redux/content/actions'

const EventCalendar = (props) => {

	useEffect(() => {
		if (props.eventsShouldUpdate && !props.eventsLoading) {
			props.updateEvents()
		}
	})

	function renderEvents() {
		const { events } = props
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

	return (
		<div className="EventCalendar">
			<div className="EventCalendar--events">
				{renderEvents()}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	events: ContentSelectors.events(state),
	eventsLoading: ContentSelectors.eventsLoading(state),
	eventsError: ContentSelectors.eventsError(state),
	eventsShouldUpdate: ContentSelectors.eventsShouldUpdate(state)
})

const mapDispatchToProps = (dispatch) => ({
	updateEvents: () => dispatch(ContentActions.updateEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventCalendar)
