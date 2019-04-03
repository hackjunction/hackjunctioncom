import React from 'react'
import './style.scss'

import { connect } from 'react-redux';
import _ from 'lodash';
import { stories } from '../../redux/stories/selectors';
import LinkGrid from './index.js';

const StoryGrid = ({ stories }) => {

	const items = _.map(stories, s => {
		return {
			image: s.logo,
			url: s.website,
			alt: s.name,
		}
	})

	return (
		<LinkGrid links={items} />
	)
}

const mapStateToProps = (state) => ({
	stories: stories(state)
})

export default connect(mapStateToProps)(StoryGrid)