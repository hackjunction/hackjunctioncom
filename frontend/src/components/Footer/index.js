import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as StaticContentSelectors from '../../redux/static/selectors'
import * as ContentSelectors from '../../redux/content/selectors'
import KEYS from '../../redux/static/keys'

import SocialMediaIcons from '../SocialMediaIcons';
import Divider from '../Divider'

const Footer = ({ content, eventConcepts, socialMedias }) => {

	function renderConceptLinks() {
		return eventConcepts.map(concept => {
			return <Link key={concept.slug} className="FooterInner--right__section-link" to={`/concepts/${concept.slug}`}>{concept.name}</Link>
		})
	}

	return (
		<footer className="Footer">
			<div className="FooterInner">
				<div className="FooterInner--left">
					<img className="FooterInner--left__logo" src={require('../../assets/logos/text_black.png')} alt="Junction logo" />
					<p className="FooterInner--left__slogan">{content.siteSlogan}</p>
					<a className="FooterInner--left__contact" href={`mailto:${content.siteContactEmail}`}>{content.siteContactEmail}</a>
					<Divider sm />
					<SocialMediaIcons
						data={socialMedias}
					/>
				</div>
				<div className="FooterInner--separator" />
				<nav className="FooterInner--right">
					<div className="FooterInner--right__section">
						<Link to="/concepts"><h5 className="FooterInner--right__section-title">Concepts</h5></Link>
						{renderConceptLinks()}
					</div>
					<div className="FooterInner--right__section">
						<h5 className="FooterInner--right__section-title">Community</h5>
						<Link className="FooterInner--right__section-link" to="/partners">For partners</Link>
						<Link className="FooterInner--right__section-link" to="/participants">For participants</Link>
						<Link className="FooterInner--right__section-link" to="/volunteers">For volunteers</Link>
						<Link className="FooterInner--right__section-link" to="/organisers">For organisers</Link>
					</div>
					<div className="FooterInner--right__section">
						<Link to="/press"><h5 className="FooterInner--right__section-title">Press Kit</h5></Link>
						<Link to="/gallery"><h5 className="FooterInner--right__section-title">Photo Gallery</h5></Link>
						<Link to="/legal"><h5 className="FooterInner--right__section-title">Legal</h5></Link>
						<Link className="FooterInner--right__section-link" to="/privacy">Privacy Policy</Link>
						<Link className="FooterInner--right__section-link" to="/terms">Terms & Conditions</Link>
					</div>
				</nav>
			</div>
			<div className="FooterBottom">
				<span className="FooterBottom--text">Designed and developed with <span role="img" aria-label="love">💕</span> & <span role="img" aria-label="coffee">☕</span> by the amazing Junction Team.</span>
			</div>
		</footer>
	)
}

const mapStateToProps = (state) => ({
	content: StaticContentSelectors.objectWithKeys([
		KEYS.siteSlogan,
		KEYS.siteContactEmail,
	])(state),
	eventConcepts: ContentSelectors.eventconcepts(state),
	socialMedias: ContentSelectors.socialmedias(state),
})


export default connect(mapStateToProps)(Footer)