import React from 'react'
import './style.scss'

import { connect } from 'react-redux'

import HeaderImage from '../../components/HeaderImage'
import BlockSection from '../../components/BlockSection'
import Divider from '../../components/Divider'

import * as ContentSelectors from '../../redux/content/selectors'
import * as StaticContentSelectors from '../../redux/static/selectors'
import KEYS from '../../redux/static/keys'

const ConceptsPage = ({ eventconcepts, loading, content }) => {

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
				mainTitle={content.conceptsPageTitle}
				bodyText={content.conceptsPageSubtitle}
			/>
			<Divider lg />
			{renderConcepts()}
			<Divider lg />
		</div >
	)
}

const mapStateToProps = (state) => ({
	content: StaticContentSelectors.objectWithKeys([
		KEYS.conceptsPageTitle,
		KEYS.conceptsPageSubtitle,
	])(state),
	loading: ContentSelectors.eventconceptsLoading(state),
	eventconcepts: ContentSelectors.eventconcepts(state)
})

export default connect(mapStateToProps)(ConceptsPage)
