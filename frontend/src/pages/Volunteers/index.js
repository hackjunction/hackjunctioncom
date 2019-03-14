import React from 'react'
import './style.scss'

import HeaderImage from '../../components/HeaderImage'
import ImageBlockSection from '../../components/ImageBlockSection'
import BlockSection from '../../components/BlockSection'
import Divider from '../../components/Divider'
import ContactForm from '../../components/ContactForm'

const VolunteersPage = () => {

	return (
		<div className="VolunteersPage">
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'For volunteers.'}
				mainTitle={'Believe in the unbelievable.'}
				bodyText={'Here general selling the community and creating nice fomo. Nunc venenatis, lectus lacinia porta laoreet, magna mi elementum leo, nec laoreet neque massa id est. Nullam auctor tortor ut urna egestas, eget eleifend ante bibendum. Mauris in enim id massa pharetra condimentum at sed purus. Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros. Suspendisse in nisi accumsan, pulvinar elit vel, gravida nisl. Aliquam lectus tortor, fermentum non elit aliquet, tristique viverra eros.'}
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
			<BlockSection title="Volunteering.">
				<p>
					We want to give you the best possible experience at Junction 2018. That’s why this year we are bringing over 30 of the top tech firms from various fields along with their experts to Junction! The weekend itself is an excellent opportunity to get to know the tech people at these companies and explore new opportunities with or in these companies. You can find out more information about our partners and their challenges in our track specific pages! Based on our feedback last year, 80% of participants were interested in exploring job opportunities at Junction. This is why we have partnered again with aTalent in Junction 2018 – to bring you interesting and relevant open positions from the fields of technology and design. We know hackathons and aTalent knows talent. Hailing from the same ecosystem at Aalto University and still fully owned by student and alumni organizations, aTalent is a recruitment company connecting skilled students and young professionals with the right companies. We chose aTalent as our recruitment partner because they are committed to helping bright talents build their career and treat applicants as valued customers.
				</p>
			</BlockSection>
			<Divider lg />
			<BlockSection title="Join the community" subtitle="Vivamus non eleifend ipsum. Cras felis est, varius vitae lorem non, sodales mollis magna. Ut id sapien eros.">
				<ContactForm />
			</BlockSection>
			<Divider lg />
		</div>
	)
}

export default VolunteersPage
