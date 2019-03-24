import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux'

import * as ContentActions from '../../redux/content/actions'
import * as ContentSelectors from '../../redux/content/selectors'
import * as StaticContentSelectors from '../../redux/static/selectors'
import * as MediaSelectors from '../../redux/media/selectors'
import KEYS from '../../redux/static/keys'
import MEDIA_KEYS from '../../redux/media/keys'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection'
import RomanNumeralList from '../../components/RomanNumeralList'
import ImageBlockSection from '../../components/ImageBlockSection'
import ContactForm from '../../components/ContactForm'
import Divider from '../../components/Divider'
import Markdown from '../../components/Markdown'

import Page from '../PageHOC'

const ParticipantsPage = ({ content, testimonials, testimonialsShouldUpdate, updateTestimonials, headerImage }) => {

	useEffect(() => {
		if (testimonialsShouldUpdate) {
			updateTestimonials()
		}
	}, [])
	const testimonial = testimonials.length > 0 ? testimonials[0] : null

	const howToJoinItems = []

	if (content.howToJoinStepOne) howToJoinItems.push(content.howToJoinStepOne)
	if (content.howToJoinStepTwo) howToJoinItems.push(content.howToJoinStepTwo)
	if (content.howToJoinStepThree) howToJoinItems.push(content.howToJoinStepThree)
	if (content.howToJoinStepFour) howToJoinItems.push(content.howToJoinStepFour)
	if (content.howToJoinStepFive) howToJoinItems.push(content.howToJoinStepFive)

	return (
		<Page className="ParticipantsPage" pageTitle="For participants">
			<HeaderImage
				image={headerImage}
				alt="Header image"
				navTitle={'For participants.'}
				mainTitle={content.participantsPageTitle}
				bodyText={content.participantsPageSubtitle}
			/>
			<BlockSection title={content.howToJoinTitle} subtitle={content.howToJoinSubtitle}>
				<RomanNumeralList
					items={howToJoinItems}
				/>
			</BlockSection>
			<Divider lg />
			{testimonial ? (
				<React.Fragment>
					<ImageBlockSection
						image={testimonial.image}
						imageAlt={testimonial.name}
						title={testimonial.name}
						subtitle={testimonial.subtitle}
					>
						<p>{testimonial.quote}</p>
					</ImageBlockSection>
					<Divider lg />
				</React.Fragment>
			) : null}
			<BlockSection title={content.getHiredTitle} subtitle={content.getHiredSubtitle}>
				<Markdown source={content.getHiredBody} />
			</BlockSection>
			<Divider lg />
			<BlockSection title={content.joinCommunity} subtitle={content.joinCommunityBody}>
				<ContactForm />
			</BlockSection>
			<Divider lg />
		</Page>
	)
}

const mapStateToProps = (state) => ({
	content: StaticContentSelectors.objectWithKeys([
		KEYS.participantsPageTitle,
		KEYS.participantsPageSubtitle,
		KEYS.howToJoinTitle,
		KEYS.howToJoinSubtitle,
		KEYS.howToJoinStepOne,
		KEYS.howToJoinStepTwo,
		KEYS.howToJoinStepThree,
		KEYS.howToJoinStepFour,
		KEYS.howToJoinStepFive,
		KEYS.getHiredTitle,
		KEYS.getHiredSubtitle,
		KEYS.getHiredBody,
		KEYS.joinCommunity,
		KEYS.joinCommunityBody
	])(state),
	testimonials: ContentSelectors.testimonialsOfType('participant')(state),
	testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state),
	headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.participantPageHeaderImage)(state)
})

const mapDispatchToProps = (dispatch) => ({
	updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
})

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsPage)