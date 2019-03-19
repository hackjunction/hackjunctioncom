import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux'

import * as ContentActions from '../../redux/content/actions'

import * as StaticContentSelectors from '../../redux/static/selectors'
import * as ContentSelectors from '../../redux/content/selectors'
import * as MediaSelectors from '../../redux/media/selectors'
import KEYS from '../../redux/static/keys'
import MEDIA_KEYS from '../../redux/media/keys'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks'
import Divider from '../../components/Divider'
import Markdown from '../../components/Markdown'

const PartnersPage = ({ content, testimonials, testimonialsShouldUpdate, updateTestimonials, headerImage }) => {

	useEffect(() => {
		if (testimonialsShouldUpdate) {
			updateTestimonials()
		}
	}, [])

	const firstTestimonial = testimonials.length > 0 ? testimonials[0] : null
	const secondTestimonial = testimonials.length > 1 ? testimonials[1] : null

	return (
		<div className="PartnersPage">
			<HeaderImage
				image={headerImage}
				alt="Header image"
				navTitle={'For partners.'}
				mainTitle={content.partnersPageTitle}
				bodyText={content.partnersPageSubtitle}
			/>
			<BlockSection title={content.partnersPageFirstTitle} subtitle={content.partnersPageFirstSubtitle}>
				<Markdown source={content.partnersPageFirstBody} />
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
			{firstTestimonial ? (
				<React.Fragment>
					<ImageBlockSection
						image={firstTestimonial.image}
						imageAlt={firstTestimonial.name}
						title={firstTestimonial.name}
						subtitle={firstTestimonial.subtitle}
					>
						<p>{firstTestimonial.quote}</p>
					</ImageBlockSection>
					<Divider lg />
				</React.Fragment>
			) : null}
			<SingleColumnSection title={content.whyPartnerWithUsTitle}>
				<BorderedSection title={content.whyPartnerWithUsFirstTitle} content={content.whyPartnerWithUsFirstBody} />
				<BorderedSection title={content.whyPartnerWithUsSecondTitle} content={content.whyPartnerWithUsSecondBody} />
				<BorderedSection title={content.whyPartnerWithUsThirdTitle} content={content.whyPartnerWithUsThirdBody} />
			</SingleColumnSection>
			<Divider lg />
			{secondTestimonial ? (
				<React.Fragment>
					<ImageBlockSection
						image={secondTestimonial.image}
						imageAlt={secondTestimonial.name}
						title={secondTestimonial.name}
						subtitle={secondTestimonial.subtitle}
					>
						<p>{secondTestimonial.quote}</p>
					</ImageBlockSection>
					<Divider lg />
				</React.Fragment>
			) : null}
			<BlockSection title={content.whatMakesUsDifferentTitle} subtitle={content.whatMakesUsDifferentSubtitle}>
				<Markdown source={content.whatMakesUsDifferentBody} />
			</BlockSection>
			<Divider lg />
			<BlockSection title={content.previousPartnersTitle} subtitle={content.previousPartnersSubtitle} >
				<Markdown source={content.previousPartnersBody} />
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
		KEYS.partnersPageTitle,
		KEYS.partnersPageSubtitle,
		KEYS.partnersPageFirstTitle,
		KEYS.partnersPageFirstSubtitle,
		KEYS.partnersPageFirstBody,
		KEYS.whyPartnerWithUsTitle,
		KEYS.whyPartnerWithUsFirstTitle,
		KEYS.whyPartnerWithUsFirstBody,
		KEYS.whyPartnerWithUsSecondTitle,
		KEYS.whyPartnerWithUsSecondBody,
		KEYS.whyPartnerWithUsThirdTitle,
		KEYS.whyPartnerWithUsThirdBody,
		KEYS.whatMakesUsDifferentTitle,
		KEYS.whatMakesUsDifferentSubtitle,
		KEYS.whatMakesUsDifferentBody,
		KEYS.previousPartnersTitle,
		KEYS.previousPartnersSubtitle,
		KEYS.previousPartnersBody,
		KEYS.joinCommunity,
		KEYS.joinCommunityBody
	])(state),
	testimonials: ContentSelectors.testimonialsOfType('partner')(state),
	testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state),
	headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.partnerPageHeaderImage)(state)
})

const mapDispatchToProps = (dispatch) => ({
	updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
})

export default connect(mapStateToProps, mapDispatchToProps)(PartnersPage)