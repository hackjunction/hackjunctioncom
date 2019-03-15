import React from 'react'
import './style.scss'

import { connect } from 'react-redux'

import * as StaticContentSelectors from '../../redux/static/selectors'
import KEYS from '../../redux/static/keys'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks'
import Divider from '../../components/Divider'
import Markdown from '../../components/Markdown'

const PartnersPage = ({ content }) => {

	return (
		<div className="PartnersPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
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
			<ImageBlockSection
				imageSrc={require('../../assets/images/teemu.png')}
				imageAlt="Teemu Lemetti"
				title="Facillisis Pellentesque"
				subtitle="Helsinki, Finland"
			>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
				</p>
			</ImageBlockSection>
			<Divider lg />
			<SingleColumnSection title={content.whyPartnerWithUsTitle}>
				<BorderedSection title={content.whyPartnerWithUsFirstTitle} content={content.whyPartnerWithUsFirstBody} />
				<BorderedSection title={content.whyPartnerWithUsSecondTitle} content={content.whyPartnerWithUsSecondBody} />
				<BorderedSection title={content.whyPartnerWithUsThirdTitle} content={content.whyPartnerWithUsThirdBody} />
			</SingleColumnSection>
			<Divider lg />
			<ImageBlockSection
				imageSrc={require('../../assets/images/teemu.png')}
				imageAlt="Teemu Lemetti"
				title="Facillisis Pellentesque"
				subtitle="Helsinki, Finland"
			>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
				</p>
			</ImageBlockSection>
			<Divider lg />
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
	])(state)
})

export default connect(mapStateToProps)(PartnersPage)