import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks'
import Divider from '../../components/Divider'

import Page from '../PageHOC'

import * as ContentSelectors from '../../redux/content/selectors'
import * as ContentActions from '../../redux/content/actions'
import * as MediaSelectors from '../../redux/media/selectors'
import MEDIA_KEYS from '../../redux/media/keys'

const OrganisersPage = ({ testimonials, testimonialsShouldUpdate, updateTestimonials, headerImage }) => {

	useEffect(() => {
		if (testimonialsShouldUpdate) {
			updateTestimonials()
		}
	}, [])

	const testimonial = testimonials.length > 0 ? testimonials[0] : null
	const secondTestimonial = testimonials.length > 1 ? testimonials[1] : null

	return (
		<Page
			className="OrganisersPage"
			pageTitle="For organisers"
			metaDesc={''}
		>
			<HeaderImage
				image={headerImage}
				alt="Header image"
				navTitle={'For organisers.'}
				mainTitle={'Bring JunctionX to your city.'}
				bodyText={'Junction provides a unique opportunity to work and interact with thousands of developers for your company. In a mere three years Junction has created a vibrant community of over 20 000 enthusiastic tech talents. Along the journey we have connected our partners with new audiences and helped them to build their own developer community. Junction has grown into an access point to emerging top tech talents from all over the world. In a mere three years Junction has created a vibrant community of over 20 000 enthusiastic tech talents. Along the journey we have connected our partners with new audiences and helped them to build their own developer community.'}
			/>
			<BlockSection title="The Junction." subtitle="Hackathon = The goal of a hackathon is to create usable software or hardware with the goal of creating a functioning product by the end of the event.">
				<p>
					Nam tellus tortor, consectetur sed elementum non, consectetur varius libero. Aliquam venenatis lacus luctus, eleifend libero commodo, suscipit nisi. Aliquam erat volutpat. Vivamus dignissim eros quis gravida vulputate. Nam viverra massa ut purus dapibus, eget dapibus eros vulputate. Sed eget erat aliquet, blandit purus venenatis, pulvinar lorem. Aliquam lectus tortor, fermentum non elit aliquet, tristique viverra eros. Sed eget vulputate eros. Aenean congue volutpat neque, scelerisque gravida felis lobortis nec. Duis sed pretium ante, at porttitor risus.
				</p>
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
			<SingleColumnSection title="Why partner with us?">
				<BorderedSection title="Recruiting" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
				<BorderedSection title="Creativity" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
				<BorderedSection title="Recognition" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
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
			<BlockSection title="What makes us different?" >
				<p>
					Nam tellus tortor, consectetur sed elementum non, consectetur varius libero. Aliquam venenatis lacus luctus, eleifend libero commodo, suscipit nisi. Aliquam erat volutpat. Vivamus dignissim eros quis gravida vulputate. Nam viverra massa ut purus dapibus, eget dapibus eros vulputate. Sed eget erat aliquet, blandit purus venenatis, pulvinar lorem. Aliquam lectus tortor, fermentum non elit aliquet, tristique viverra eros. Sed eget vulputate eros. Aenean congue volutpat neque, scelerisque gravida felis lobortis nec. Duis sed pretium ante, at porttitor risus.
				</p>
			</BlockSection>
			<Divider lg />
			<BlockSection title="Partners" subtitle="Some of our partners from previous years" >
				<p>
					Nam tellus tortor, consectetur sed elementum non, consectetur varius libero. Aliquam venenatis lacus luctus, eleifend libero commodo, suscipit nisi. Aliquam erat volutpat. Vivamus dignissim eros quis gravida vulputate. Nam viverra massa ut purus dapibus, eget dapibus eros vulputate. Sed eget erat aliquet, blandit purus venenatis, pulvinar lorem. Aliquam lectus tortor, fermentum non elit aliquet, tristique viverra eros. Sed eget vulputate eros. Aenean congue volutpat neque, scelerisque gravida felis lobortis nec. Duis sed pretium ante, at porttitor risus.
				</p>
			</BlockSection>
			<Divider lg />
			<BlockSection title="Join the community" subtitle="Shoot us a message! We'll be sure to answer asap." >
				<ContactForm />
			</BlockSection>
			<Divider lg />
		</Page>
	)
}

const mapStateToProps = (state) => ({
	testimonials: ContentSelectors.testimonialsOfType('organiser')(state),
	testimonialsShouldUpdate: ContentSelectors.testimonialsShouldUpdate(state),
	headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.organiserPageHeaderImage)(state)
})

const mapDispatchToProps = (dispatch) => ({
	updateTestimonials: () => dispatch(ContentActions.updateTestimonials())
})

export default connect(mapStateToProps, mapDispatchToProps)(OrganisersPage)