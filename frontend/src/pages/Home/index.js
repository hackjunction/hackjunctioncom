import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection'
import StatBlock from '../../components/StatBlock'
import LinkGrid from '../../components/LinkGrid'
import ContactForm from '../../components/ContactForm'

const HomePage = (props) => {

	return (
		<div className="HomePage">
			<HeaderImage src={'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg'} />
			<BlockSection title="Who are we?">
				<p style={{ margin: 0 }}>
					Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros. Suspendisse in nisi accumsan, pulvinar elit vel, gravida nisl. Aliquam lectus tortor, fermentum non elit aliquet, tristique viverra eros. Sed eget vulputate eros. Aenean congue volutpat neque, scelerisque gravida felis lobortis nec. Duis sed pretium ante, at porttitor risus. Nam tellus tortor, consectetur sed elementum non, consectetur varius libero. Aliquam venenatis lacus luctus, eleifend libero commodo, suscipit nisi. Aliquam erat volutpat. Vivamus dignissim eros quis gravida vulputate. Nam viverra massa ut purus dapibus, eget dapibus eros vulputate.
					<br />
					<br />
					Sed eget erat aliquet, blandit purus venenatis, pulvinar lorem.
				</p>
				<div className="HomePage--statblocks">
					<StatBlock value={72} label="attendees" />
					<StatBlock value={3500} label="attendees" />
				</div>
			</BlockSection>
			<div style={{ height: 200 }} />
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
			<div style={{ height: 200 }} />
			<BlockSection title="Join the community" subtitle="Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros.">
				<ContactForm />
			</BlockSection>
		</div>
	)
}

export default HomePage