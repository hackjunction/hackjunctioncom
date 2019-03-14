import React, { useEffect } from 'react'
import './style.scss'
import _ from 'lodash'
import moment from 'moment-timezone'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import IconText from '../IconText'
import EventCalendarYear from './EventCalendarYear'

import * as ContentSelectors from '../../redux/content/selectors'
import * as ContentActions from '../../redux/content/actions'

const EventCalendar = ({ events, eventsWithFilters, loading, error, updateEvents, shouldUpdate, concept = null, category = null }) => {

	useEffect(() => {
		if (shouldUpdate && !loading) {
			updateEvents()
		}
	})

	function renderEvents() {
		const filtered = eventsWithFilters(concept, category)

		if (filtered.length === 0) {
			return (
				<div className="EventCalendar--no-events">
					<h4 className="EventCalendar--no-events__title">No upcoming events</h4>
					<p className="EventCalendar--no-events__body">Check back here later!</p>
				</div>
			)
		}

		const sorted = _.sortBy(filtered, e => e.begins)
		const groupedByYear = _.groupBy(sorted, e => moment(e.begins).format('YYYY'))

		const calendarYears = [];

		_.forOwn(groupedByYear, (events, year) => {
			calendarYears.push(
				<EventCalendarYear key={year} year={year} events={events} />
			)
		})

		return calendarYears;
	}

	return (
		<div className="EventCalendar">
			<div className="EventCalendar--events">
				{renderEvents()}
			</div>
			<div className="EventCalendar--more">
				{concept || category ? <Link className="EventCalendar--more__link" to="/calendar">See all events</Link> : null}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	events: ContentSelectors.events(state),
	eventsWithFilters: (concept, category) => ContentSelectors.eventsWithFilters(concept, category)(state),
	loading: ContentSelectors.eventsLoading(state),
	error: ContentSelectors.eventsError(state),
	shouldUpdate: ContentSelectors.eventsShouldUpdate(state)
})

const mapDispatchToProps = (dispatch) => ({
	updateEvents: () => dispatch(ContentActions.updateEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(EventCalendar)
