import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection/'
import ImageBlockSection from '../../components/ImageBlockSection/'
import ContactForm from '../../components/ContactForm/'
import StatBlocks from '../../components/StatBlocks'
import ImageLinks from '../../components/ImageLinks'

import Divider from '../../components/Divider'

const StoryPage = () => {

	return (
		<div className="StoryPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'Story.'}
				mainTitle={'Once upon a time...'}
				bodyText={'Here general selling the community and creating nice fomo. Nunc venenatis, lectus lacinia porta laoreet, magna mi elementum leo, nec laoreet neque massa id est. Nullam auctor tortor ut urna egestas, eget eleifend ante bibendum. Mauris in enim id massa pharetra condimentum at sed purus. Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros. Suspendisse in nisi accumsan, pulvinar elit vel, gravida nisl. Aliquam lectus tortor, fermentum non elit aliquet, tristique viverra eros.'}
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
			<BlockSection title="Junction 2019.">
				<p>
					We want to give you the best possible experience at Junction 2018. That’s why this year we are bringing over 30 of the top tech firms from various fields along with their experts to Junction! The weekend itself is an excellent opportunity to get to know the tech people at these companies and explore new opportunities with or in these companies. You can find out more information about our partners and their challenges in our track specific pages! Based on our feedback last year, 80% of participants were interested in exploring job opportunities at Junction. This is why we have partnered again with aTalent in Junction 2018 – to bring you interesting and relevant open positions from the fields of technology and design. We know hackathons and aTalent knows talent. Hailing from the same ecosystem at Aalto University and still fully owned by student and alumni organizations, aTalent is a recruitment company connecting skilled students and young professionals with the right companies. We chose aTalent as our recruitment partner because they are committed to helping bright talents build their career and treat applicants as valued customers.
				</p>
			</BlockSection>
			<Divider lg />
			<BlockSection title="Join the community" subtitle="Shoot us a message! We'll be sure to answer asap." >
				<ContactForm />
			</BlockSection>
			<Divider lg />
			<ImageLinks
				links={[
					{
						imageSrc: require('../../assets/images/junction1.jpg'),
						imageAlt: 'Link',
						linkTo: '/partners',
						linkText: 'For partners'
					},
					{
						imageSrc: require('../../assets/images/junction1.jpg'),
						imageAlt: 'Link',
						linkTo: '/volunteers',
						linkText: 'For volunteers'
					},
					{
						imageSrc: require('../../assets/images/junction1.jpg'),
						imageAlt: 'Link',
						linkTo: '/calendar',
						linkText: 'Calendar'
					}
				]}
			/>
		</div>
	)
}

export default StoryPage