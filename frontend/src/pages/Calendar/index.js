import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import * as StaticContentSelectors from '../../redux/static/selectors'
import KEYS from '../../redux/static/keys'

import HeaderImage from '../../components/HeaderImage'
import EventCalendar from '../../components/EventCalendar'
import Divider from '../../components/Divider'

const CalendarPage = ({ content }) => {
	return (
		<div className="CalendarPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'Calendar.'}
				mainTitle={content.calendarPageTitle}
				bodyText={content.calendarPageSubtitle}
			/>
			<EventCalendar />
			<Divider lg />
		</div>
	)
}

const mapStateToProps = (state) => ({
	content: StaticContentSelectors.objectWithKeys([
		KEYS.calendarPageTitle,
		KEYS.calendarPageSubtitle,
	])(state)
})

export default connect(mapStateToProps)(CalendarPage)