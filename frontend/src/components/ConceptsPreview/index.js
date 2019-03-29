import React from 'react'
import './style.scss'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Divider from '../Divider'
import Image from '../Image'
import LinkButton from '../LinkButton'
import * as ContentSelectors from '../../redux/content/selectors'

const ConceptsPreview = ({ concepts }) => {


	function renderConcepts() {
		return concepts.map(concept => {
			return (
				<div className="ConceptsPreview--item">
					<Image className="ConceptsPreview--item__image" image={concept.image} alt={concept.name} width={620} />
					<div className="ConceptsPreview--item__content">
						<Image className="ConceptsPreview--item__logo" image={concept.logo} alt={concept.name + ' logo'} width={300} />
						<span className="ConceptsPreview--item__punchline">{concept.punchline}</span>
					</div>
					<Link className="ConceptsPreview--item__link" to={`/concepts/${concept.slug}`} />
				</div>
			)
		})
		return null
	}

	return (
		<div className="ConceptsPreview">
			{renderConcepts()}
			<Divider sm />
			<LinkButton to={'/concepts'} text={'See more'} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	concepts: ContentSelectors.eventconceptsByPriority(state)
})

export default connect(mapStateToProps)(ConceptsPreview)