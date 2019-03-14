import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection'
import StatBlocks from '../../components/StatBlocks'
import LinkGrid from '../../components/LinkGrid'
import ContactForm from '../../components/ContactForm'
import Divider from '../../components/Divider'

const HomePage = (props) => {

	return (
		<div className="HomePage">
			<HeaderImage src={require('../../assets/images/junction1.jpg')} />
			<BlockSection title="Who are we?">
				<p>
					Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros. Suspendisse in nisi accumsan, pulvinar elit vel, gravida nisl. Aliquam lectus tortor, fermentum non elit aliquet, tristique viverra eros. Sed eget vulputate eros. Aenean congue volutpat neque, scelerisque gravida felis lobortis nec. Duis sed pretium ante, at porttitor risus. Nam tellus tortor, consectetur sed elementum non, consectetur varius libero. Aliquam venenatis lacus luctus, eleifend libero commodo, suscipit nisi. Aliquam erat volutpat. Vivamus dignissim eros quis gravida vulputate. Nam viverra massa ut purus dapibus, eget dapibus eros vulputate.
					<br />
					<br />
					Sed eget erat aliquet, blandit purus venenatis, pulvinar lorem.
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
			<BlockSection title="What is it that we do?" subtitle="Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros.">
				<LinkGrid
					links={[
						{
							id: 1,
							title: 'Hackathons'
						},
						{
							id: 2,
							title: 'Speaker events',
						},
						{
							id: 3,
							title: 'Tech meetups'
						},
						{
							id: 4,
							title: 'More -->'
						}
					]}
				/>
			</BlockSection>
			<Divider lg />
			<BlockSection title="Join the community" subtitle="Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros.">
				<ContactForm />
			</BlockSection>
			<Divider lg />
		</div>
	)
}

export default HomePage