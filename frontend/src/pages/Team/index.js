import React, { useEffect } from 'react'
import './style.scss'
import { connect } from 'react-redux'

import HeaderImage from '../../components/HeaderImage'
import TeamMemberGrid from '../../components/TeamMemberGrid'
import BlockSection from '../../components/BlockSection'
import ContactForm from '../../components/ContactForm'
import Divider from '../../components/Divider'

import * as StaticContentSelectors from '../../redux/static/selectors'
import * as ContentSelectors from '../../redux/content/selectors'
import * as ContentActions from '../../redux/content/actions'
import KEYS from '../../redux/static/keys'

const TeamPage = ({ content, teamMembers, shouldUpdate, updateTeamMembers }) => {

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
				mainTitle={content.teamPageTitle}
				bodyText={content.teamPageSubtitle}
			/>
			<TeamMemberGrid teamMembers={teamMembers} />
			<Divider lg />
			<BlockSection title={content.joinCommunity} subtitle={content.joinCommunityBody}>
				<ContactForm />
			</BlockSection>
			<Divider lg />
		</div>
	)
}

const mapStateToProps = (state) => ({
	content: StaticContentSelectors.objectWithKeys([
		KEYS.teamPageTitle,
		KEYS.teamPageSubtitle,
		KEYS.joinCommunity,
		KEYS.joinCommunityBody,
	])(state),
	teamMembers: ContentSelectors.teammembers(state),
	shouldUpdate: ContentSelectors.teammembersShouldUpdate(state),
})

const mapDispatchToProps = (dispatch) => ({
	updateTeamMembers: () => dispatch(ContentActions.updateTeamMembers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)