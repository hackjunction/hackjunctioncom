import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import * as StaticContentSelectors from '../../redux/static/selectors'
import * as MediaSelectors from '../../redux/media/selectors'
import KEYS from '../../redux/static/keys'
import MEDIA_KEYS from '../../redux/media/keys'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection/'
import ImageBlockSection from '../../components/ImageBlockSection/'
import ContactForm from '../../components/ContactForm/'
import StatBlocks from '../../components/StatBlocks'
import ImageLinks from '../../components/ImageLinks'
import Markdown from '../../components/Markdown'

import Divider from '../../components/Divider'


const StoryPage = ({ content, headerImage }) => {

	return (
		<div className="StoryPage">
			<HeaderImage
				image={headerImage}
				alt="Header image"
				navTitle={'Story.'}
				mainTitle={content.storyPageTitle}
				bodyText={content.storyPageSubtitle}
			/>
			<BlockSection title={content.whatIsJunctionTitle} subtitle={content.whatIsJunctionSubtitle}>
				<Markdown source={content.whatIsJunctionBody} />
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
			<ImageBlockSection
				image={{}}
				imageAlt={content.storyPagePersonTitle}
				title={content.storyPagePersonTitle}
				subtitle={content.storyPagePersonSubtitle}
			>
				<Markdown source={content.storyPagePersonBody} />
			</ImageBlockSection>
			<Divider lg />
			<BlockSection title={content.junction2019}>
				<Markdown source={content.junction2019Body} />
			</BlockSection>
			<Divider lg />
			<BlockSection title={content.joinCommunity} subtitle={content.joinCommunityBody} >
				<ContactForm />
			</BlockSection>
			<Divider lg />
			<ImageLinks
				links={[
					{
						imageSrc: require('../../assets/images/default_image.jpg'),
						imageAlt: 'Link',
						linkTo: '/partners',
						linkText: 'For partners'
					},
					{
						imageSrc: require('../../assets/images/default_image.jpg'),
						imageAlt: 'Link',
						linkTo: '/volunteers',
						linkText: 'For volunteers'
					},
					{
						imageSrc: require('../../assets/images/default_image.jpg'),
						imageAlt: 'Link',
						linkTo: '/calendar',
						linkText: 'Calendar'
					}
				]}
			/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	content: StaticContentSelectors.objectWithKeys([
		KEYS.storyPageTitle,
		KEYS.storyPageSubtitle,
		KEYS.whatIsJunctionTitle,
		KEYS.whatIsJunctionSubtitle,
		KEYS.whatIsJunctionBody,
		KEYS.storyPagePersonImage,
		KEYS.storyPagePersonTitle,
		KEYS.storyPagePersonSubtitle,
		KEYS.storyPagePersonBody,
		KEYS.junction2019,
		KEYS.junction2019Body,
		KEYS.joinCommunity,
		KEYS.joinCommunityBody
	])(state),
	headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.storyPageHeaderImage)(state)
})

export default connect(mapStateToProps)(StoryPage)