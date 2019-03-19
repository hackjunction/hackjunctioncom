import React from 'react'
import './style.scss'

import { connect } from 'react-redux'

import HeaderImage from '../../components/HeaderImage'
import Divider from '../../components/Divider'

import * as MediaSelectors from '../../redux/media/selectors'
import MEDIA_KEYS from '../../redux/media/keys'

const NotFoundPage = ({ headerImage }) => {

	return (
		<div className="NotFoundPage">
			<HeaderImage
				image={headerImage}
				alt="Header image"
				navTitle={'404'}
				mainTitle={'Page not found'}
				bodyText={'It seems like the page you were looking for doesn\'t exist...'}
			/>
			<Divider lg />
		</div>
	)
}

const mapStateToProps = (state) => ({
	headerImage: MediaSelectors.mediaByKey(MEDIA_KEYS.notFoundPageHeaderImage)(state)
})

export default connect(mapStateToProps)(NotFoundPage)