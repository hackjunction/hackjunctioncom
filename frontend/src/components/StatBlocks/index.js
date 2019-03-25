import React from 'react'
import './style.scss'

import StatBlock from '../StatBlock'

const StatBlocks = ({ blocks = [] }) => {

	function renderBlocks() {
		return blocks.map(block => {
			return (
				<StatBlock key={block.id} value={block.value} label={block.label} />
			)
		})
	}

	if (!Array.isArray(blocks) || blocks.length === 0) {
		return null;
	}

	return (
		<div className="StatBlocks">
			{renderBlocks()}
		</div>
	)
}

export default StatBlocks