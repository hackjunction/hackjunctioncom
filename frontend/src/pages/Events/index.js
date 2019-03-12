import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import EventService from '../../services/events';

class EventsPage extends React.Component {

	constructor(props) {
		super(props)

		this.state = {}
	}

	componentDidMount() {
		EventService.getAll().then(events => {
			console.log('EVENTS', events)
		})
	}

	render() {
		return (
			<div className="EventsPage">
				<HeaderImage
					src={require('../../assets/images/junction1.jpg')}
					alt="Header image"
					navTitle={'Concepts.'}
					mainTitle={'Empowering everywhere.'}
					bodyText={'In a mere three years Junction has created a vibrant community of over 20 000 enthusiastic tech talents. Along the journey we have connected our partners with new audiences and helped them to build their own developer community. Along the journey we have connected our partners with new audiences and helped them to build their own developer community. Junction has grown into an access point to emerging top tech talents from all over the world.'}
				/>
			</div>
		)
	}
}

// const EventsPage = () => {
// 	return (
// 		<div className="EventsPage">
// 			<HeaderImage
// 				src={require('../../assets/images/junction1.jpg')}
// 				alt="Header image"
// 				navTitle={'Events.'}
// 				mainTitle={'Empowering everywhere.'}
// 				bodyText={'In a mere three years Junction has created a vibrant community of over 20 000 enthusiastic tech talents. Along the journey we have connected our partners with new audiences and helped them to build their own developer community. Along the journey we have connected our partners with new audiences and helped them to build their own developer community. Junction has grown into an access point to emerging top tech talents from all over the world.'}
// 			/>
// 		</div>
// 	)
// }

export default EventsPage