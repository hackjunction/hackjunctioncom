import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection'
import Divider from '../../components/Divider'

import * as ContentActions from '../../redux/content/actions'
import * as ContentSelectors from '../../redux/content/selectors'

const ConceptsPage = ({ eventconcepts, loading, updateEventConcepts, shouldUpdate }) => {

	useEffect(() => {
		if (shouldUpdate) {
			updateEventConcepts()
		}
	}, [])

	function buildSubtitleItems(concept) {
		const items = []

		if (concept.eventcategory) {
			items.push({
				icon: 'foo',
				text: concept.eventcategory.name
			})
		}

		if (concept.timedescription) {
			items.push({
				icon: 'foo',
				text: concept.timedescription
			})
		}

		if (concept.locationdescription) {
			items.push({
				icon: 'foo',
				text: concept.locationdescription
			})
		}

		return items
	}

	function renderConcepts() {

		return eventconcepts.map(concept => {
			return (
				<React.Fragment key={concept.slug}>
					<BlockSection
						title={concept.name}
						subtitleItems={buildSubtitleItems(concept)}
					>
						<p>
							{concept.shortdescription}
						</p>
					</BlockSection>
					<Divider md />
				</React.Fragment>
			)
		})
	}


	return (
		< div className="ConceptsPage" >
			<HeaderImage
				src={require('../../assets/images/junction1.jpg')}
				alt="Header image"
				navTitle={'Concepts.'}
				mainTitle={'Empowering everywhere.'}
				bodyText={'In a mere three years Junction has created a vibrant community of over 20 000 enthusiastic tech talents. Along the journey we have connected our partners with new audiences and helped them to build their own developer community. Along the journey we have connected our partners with new audiences and helped them to build their own developer community. Junction has grown into an access point to emerging top tech talents from all over the world.'}
			/>
			<Divider lg />
			{renderConcepts()}
			<Divider lg />
		</div >
	)
}

const mapStateToProps = (state) => ({
	eventconcepts: ContentSelectors.eventconcepts(state),
	loading: ContentSelectors.eventconceptsLoading(state),
	shouldUpdate: ContentSelectors.eventconceptsShouldUpdate(state),
})

const mapDispatchToProps = (dispatch) => ({
	updateEventConcepts: () => dispatch(ContentActions.updateEventConcepts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConceptsPage)
