import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import EventCalendar from '../../components/EventCalendar';

const CalendarPage = () => {
	return (
		<div className="CalendarPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'Calendar.'}
				mainTitle={'Something is happening.'}
				bodyText={'Junction organises events - hackathnos, speaker events, mini hackathons and other - all over the world. Here is a calendar view of what is coming up next.'}
			/>
			<EventCalendar />
		</div>
	)
}

export default CalendarPage