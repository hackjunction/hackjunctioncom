import React, { PureComponent } from 'react'
import './style.scss'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Divider from '../Divider'
import Image from '../Image'
import LinkButton from '../LinkButton'
import { eventconceptsByPriority as selectEventConcepts } from '../../redux/eventconcepts/selectors';

class ConceptsPreview extends PureComponent {

	renderConcepts() {
		const { concepts } = this.props;
		return concepts.map(concept => {
			return (
				<div className="ConceptsPreview--item" key={concept.slug}>
					<Image className="ConceptsPreview--item__image" image={concept.image} alt={concept.name} width={620} />
					<div className="ConceptsPreview--item__content">
						<Image className="ConceptsPreview--item__logo" image={concept.logo} alt={concept.name + ' logo'} width={300} />
						<span className="ConceptsPreview--item__punchline">{concept.punchline}</span>
					</div>
					<Link className="ConceptsPreview--item__link" to={`/concepts/${concept.slug}`} />
				</div>
			)
		})
	}

	render() {
		const { concepts } = this.props;

		if (!Array.isArray(concepts) || concepts.length === 0) {
			return null;
		}

		return (
			<div className="ConceptsPreview">
				{this.renderConcepts()}
				<Divider sm />
				<LinkButton to={'/concepts'} text={'See more'} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	concepts: selectEventConcepts(state),
})

export default connect(mapStateToProps)(ConceptsPreview)