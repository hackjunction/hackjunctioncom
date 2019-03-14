import React from 'react'
import './style.scss'

import StatBlock from '../StatBlock'

const StatBlocks = ({ blocks }) => {

	function renderBlocks() {
		return blocks.map(block => {
			return (
				<StatBlock key={block.value + '-' + block.label} value={block.value} label={block.label} />
			)
		})
	}

	return (
		<div className="StatBlocks">
			{renderBlocks()}
		</div>
	)
}

export default StatBlocks