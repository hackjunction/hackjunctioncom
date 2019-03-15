import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import * as StaticContentSelectors from '../../redux/static/selectors'
import KEYS from '../../redux/static/keys'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection'
import StatBlocks from '../../components/StatBlocks'
import LinkGrid from '../../components/LinkGrid'
import ContactForm from '../../components/ContactForm'
import Divider from '../../components/Divider'
import Markdown from '../../components/Markdown'

const HomePage = ({ content }) => {

	return (
		<div className="HomePage">
			<HeaderImage src={require('../../assets/images/junction1.jpg')} />
			<BlockSection title={content.whoAreWe} subtitle={content.whoAreWeSubtitle}>
				<Markdown source={content.whoAreWeBody} />
				<StatBlocks
					blocks={[
						{
							value: 72,
							label: 'attendees'
						},
						{
							value: 3500,
							label: 'attendees'
						}
					]}
				/>
			</BlockSection>
			<Divider lg />
			<BlockSection title={content.whatWeDo} subtitle={content.whatWeDoSubtitle}>
				<Markdown source={content.whatWeDoBody} />
				<LinkGrid
					links={[
						{
							id: 1,
							title: 'Hackathons'
						},
						{
							id: 2,
							title: 'Speaker events',
						},
						{
							id: 3,
							title: 'Tech meetups'
						},
						{
							id: 4,
							title: 'More -->'
						}
					]}
				/>
			</BlockSection>
			<Divider lg />
			<BlockSection title={content.joinCommunity} subtitle={content.joinCommunityBody} >
				<ContactForm />
			</BlockSection>
			<Divider lg />
		</div>
	)
}

const mapStateToProps = (state) => ({
	content: StaticContentSelectors.objectWithKeys([
		KEYS.whoAreWe,
		KEYS.whoAreWeBody,
		KEYS.whoAreWeSubtitle,
		KEYS.whatWeDo,
		KEYS.whatWeDoBody,
		KEYS.whatWeDoSubtitle,
		KEYS.joinCommunity,
		KEYS.joinCommunityBody
	])(state),
})

export default connect(mapStateToProps)(HomePage)