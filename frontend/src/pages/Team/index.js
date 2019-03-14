import React, { useEffect } from 'react'
import './style.scss'
import { connect } from 'react-redux'

import HeaderImage from '../../components/HeaderImage'
import TeamMemberGrid from '../../components/TeamMemberGrid'
import BlockSection from '../../components/BlockSection'
import ContactForm from '../../components/ContactForm'
import Divider from '../../components/Divider'

import * as ContentSelectors from '../../redux/content/selectors'
import * as ContentActions from '../../redux/content/actions'

const TeamPage = ({ teamMembers, shouldUpdate, updateTeamMembers }) => {

	useEffect(() => {
		if (shouldUpdate) {
			updateTeamMembers()
		}
	}, [])

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
			<Divider lg />
			<BlockSection title="Join the community" subtitle="Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros.">
				<ContactForm />
			</BlockSection>
			<Divider lg />
		</div>
	)
}

const mapStateToProps = (state) => ({
	teamMembers: ContentSelectors.teammembers(state),
	shouldUpdate: ContentSelectors.teammembersShouldUpdate(state),
})

const mapDispatchToProps = (dispatch) => ({
	updateTeamMembers: () => dispatch(ContentActions.updateTeamMembers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)