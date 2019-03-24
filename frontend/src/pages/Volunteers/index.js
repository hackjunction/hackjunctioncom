import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux'

import * as StaticContentSelectors from '../../redux/static/selectors'
import * as ContentSelectors from '../../redux/content/selectors'
import * as ContentActions from '../../redux/content/actions'
import * as MediaSelectors from '../../redux/media/selectors'
import KEYS from '../../redux/static/keys'
import MEDIA_KEYS from '../../redux/media/keys'

import HeaderImage from '../../components/HeaderImage'
import ImageBlockSection from '../../components/ImageBlockSection'
import BlockSection from '../../components/BlockSection'
import Divider from '../../components/Divider'
import ContactForm from '../../components/ContactForm'
import Markdown from '../../components/Markdown'

import Page from '../PageHOC'


const VolunteersPage = ({ content, testimonials, testimonialsShouldUpdate, updateTestimonials, headerImage }) => {

	useEffect(() => {
		if (testimonialsShouldUpdate) {
			updateTestimonials()
		}
	}, [])

	const testimonial = testimonials.length > 0 ? testimonials[0] : null

	return (
		<Page
			className="VolunteersPage"
			pageTitle="For volunteers"
			metaDesc={content.volunteersPageSubtitle}
		>
			<HeaderImage
				image={headerImage}
				alt="Header image"
				navTitle={'For volunteers.'}
				mainTitle={content.volunteersPageTitle}
				bodyText={content.volunteersPageSubtitle}
			/>
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
			<BlockSection title={content.volunteeringTitle} subtitle={content.volunteeringSubtitle}>
				<Markdown source={content.volunteeringBody} />
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
		KEYS.volunteersPageTitle,
		KEYS.volunteersPageSubtitle,
		KEYS.volunteeringTitle,
		KEYS.volunteeringSubtitle,
		KEYS.volunteeringBody,
		KEYS.joinCommunity,
		KEYS.joinCommunityBody
	])(state),
	testimonials: ContentSelectors.testimonialsOfType('volunteer')(state),
	testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state),
	headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.volunteerPageHeaderImage)(state)
})

const mapDispatchToProps = (dispatch) => ({
	updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
})


export default connect(mapStateToProps, mapDispatchToProps)(VolunteersPage)
