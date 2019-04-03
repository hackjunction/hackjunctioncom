import React from 'react'
import './style.scss'

import _ from 'lodash';
import { connect } from 'react-redux'
import { media as selectMedia } from '../../redux/staticmedia/selectors';
import ImageLink from '../ImageLink'

const ImageLinks = ({ links }) => {

	function renderLinks() {
		return _.map(links, link => {
			return (
				<ImageLink key={link.linkTo} {...link} />
			)
		});
	}

	return (
		<div className="ImageLinks">
			{renderLinks()}
		</div>
	)
};

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