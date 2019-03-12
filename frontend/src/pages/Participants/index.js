import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection'
import RomanNumeralList from '../../components/RomanNumeralList'
import ImageBlockSection from '../../components/ImageBlockSection'
import ContactForm from '../../components/ContactForm'

const ParticipantsPage = () => {

	return (
		<div className="ParticipantsPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'For participants.'}
				mainTitle={'Believe in the unbelievable.'}
				bodyText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
			/>
			<BlockSection title="How to join?" subtitle="From event specific pages you can find more detailed info about participating in each event">
				<RomanNumeralList
					items={[
						'Find the event that is most appealing to you',
						'Apply or register to be part of the event',
						'Congratulations! You are part of the Junction community',
						'Some 4th thing here',
						'Some nth thing here',
						'Some nth thing here',
						'Some nth thing here',
						'Some nth thing here',
						'Some nth thing here',
					]}
				/>
			</BlockSection>
			<div style={{ height: 200 }} />
			<ImageBlockSection
				imageSrc={require('../../assets/images/teemu.png')}
				imageAlt="Teemu Lemetti"
				title="Facillisis Pellentesque"
				subtitle="Helsinki, Finland"
			>
				<p style={{ margin: 0 }}>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
				</p>
			</ImageBlockSection>
			<div style={{ height: 200 }} />
			<BlockSection title="Get hired.">
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
					<br />
					<br />
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
					<br />
					<br />
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
				</p>
			</BlockSection>
			<div style={{ height: 200 }} />
			<BlockSection title="Join the community" subtitle="Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros.">
				<ContactForm />
			</BlockSection>
			<div style={{ height: 200 }} />
		</div>
	)
}

export default ParticipantsPage