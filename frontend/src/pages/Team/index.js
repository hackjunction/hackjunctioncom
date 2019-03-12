import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import TeamMemberGrid from '../../components/TeamMemberGrid'
import BlockSection from '../../components/BlockSection'
import ContactForm from '../../components/ContactForm'

import teamMembers from './teamMembers'

const TeamPage = () => {
	return (
		<div className="TeamPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'Team.'}
				mainTitle={'It\'s a team.'}
				bodyText={'We are Junction – a volunteer-lead community effort around the world. Our headquarters is located at Startup Sauna in Finland but the whole Junction team spreads out to several different places, world-wide. The thing that keeps us together? Passion for empowering people to create with technology.'}
			/>
			<TeamMemberGrid teamMembers={teamMembers} />
			<div style={{ height: 200 }} />
			<BlockSection title="Join the community" subtitle="Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros.">
				<ContactForm />
			</BlockSection>
			<div style={{ height: 200 }} />
		</div>
	)
}

export default TeamPage