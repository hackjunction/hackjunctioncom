import React from 'react'
import './style.scss'

import { connect } from 'react-redux'

import * as StaticContentSelectors from '../../redux/static/selectors'
import KEYS from '../../redux/static/keys'

import HeaderImage from '../../components/HeaderImage'
import ImageBlockSection from '../../components/ImageBlockSection'
import BlockSection from '../../components/BlockSection'
import Divider from '../../components/Divider'
import ContactForm from '../../components/ContactForm'
import Markdown from '../../components/Markdown'

const VolunteersPage = ({ content }) => {

	return (
		<div className="VolunteersPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'For volunteers.'}
				mainTitle={content.volunteersPageTitle}
				bodyText={content.volunteersPageSubtitle}
			/>
			<ImageBlockSection
				imageSrc={require('../../assets/images/teemu.png')}
				imagAlt={'Teemu Lemetti'}
				title="Facilisis Pellentesque"
				subtitle="Helsinki, Finland."
			>
				<p>
					Facilisis Pellentesque Helsinki, Finland. “Diam eleifend at eleifend quis, rhoncus ac tellus. Aenean pellentesque tempus urna euismod imperdiet. Suspendisse ornare eu metus nec semper. Vivamus eu congue nisi, ut consectetur risus. Donec non lectus quis risus posuere commodo. Sed tristique lorem vel mi eleifend, eu dapibus dolor tristique. Vestibulum elit orci, fringilla sed dignissim sit amet, hendrerit porttitor justo. Etiam cursus lorem nec velit tempus laoreet. Ut eu faucibus nisi.”
				</p>
			</ImageBlockSection>
			<Divider lg />
			<BlockSection title={content.volunteeringTitle} subtitle={content.volunteeringSubtitle}>
				<Markdown source={content.volunteeringBody} />
			</BlockSection>
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
		KEYS.volunteersPageTitle,
		KEYS.volunteersPageSubtitle,
		KEYS.volunteeringTitle,
		KEYS.volunteeringSubtitle,
		KEYS.volunteeringBody,
		KEYS.joinCommunity,
		KEYS.joinCommunityBody
	])(state)
})


export default connect(mapStateToProps)(VolunteersPage)
