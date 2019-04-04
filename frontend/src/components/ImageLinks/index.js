import React, { PureComponent } from 'react'
import './style.scss'

import _ from 'lodash';
import { connect } from 'react-redux'
import { media as selectMedia } from '../../redux/staticmedia/selectors';
import ImageLink from '../ImageLink'

class ImageLinks extends PureComponent {

	renderLinks() {
		const { links } = this.props;
		return _.map(links, link => {
			return (
				<ImageLink key={link.linkTo} {...link} />
			)
		});
	}

	render() {
		return (
			<div className="ImageLinks">
				{this.renderLinks()}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const media = selectMedia(state)

	return {
		links: _.map(ownProps.links, link => {
			return {
				...link,
				image: media[link.imageKey]
			}
		})
	}
}

export default connect(mapStateToProps)(ImageLinks)