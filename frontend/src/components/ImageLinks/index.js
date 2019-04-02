import React from 'react'
import './style.scss'

import { connect } from 'react-redux'
import * as MediaSelectors from '../../redux/media/selectors';
import { mediaByKey } from '../../redux/media/helpers';

import ImageLink from '../ImageLink'

const ImageLinks = React.memo(({ links, allMedia }) => {

	function renderLinks() {
		return links.map(link => {
			const image = mediaByKey(allMedia, link.mediaKey);
			return (
				<ImageLink key={link.linkTo} image={image} {...link} />
			)
		})
	}

	return (
		<div className="ImageLinks">
			{renderLinks()}
		</div>
	)
})

const mapStateToProps = (state) => ({
	allMedia: MediaSelectors.media(state)
})

export default connect(mapStateToProps)(ImageLinks)