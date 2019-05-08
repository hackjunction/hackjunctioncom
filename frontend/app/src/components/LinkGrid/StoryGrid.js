import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux';
import { map } from 'lodash-es';
import { stories } from '../../redux/stories/selectors';
import { updateStories } from '../../redux/stories/actions';
import LinkGrid from './index.js';

const StoryGrid = ({ stories, updateStories }) => {

	useEffect(() => {
		updateStories();
	}, [])

	const items = map(stories, s => {
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

const mapDispatchToProps = dispatch => ({
	updateStories: () => dispatch(updateStories())
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryGrid)