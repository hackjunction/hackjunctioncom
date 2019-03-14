import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection/';
import ImageBlockSection from '../../components/ImageBlockSection/';
import SingleColumnSection from '../../components/SingleColumnSection/';
import BorderedSection from '../../components/BorderedSection/';
import ContactForm from '../../components/ContactForm/';
import StatBlocks from '../../components/StatBlocks'

import Divider from '../../components/Divider'

const PartnersPage = () => {

	return (
		<div className="PartnersPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'For partners.'}
				mainTitle={'Unlock the hackerworld.'}
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
			<SingleColumnSection title="Why partner with us?">
				<BorderedSection title="Recruiting" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
				<BorderedSection title="Creativity" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
				<BorderedSection title="Recognition" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
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
		</div>
	)
}

export default PartnersPage