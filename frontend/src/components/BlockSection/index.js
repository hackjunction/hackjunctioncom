import React from 'react'
import './style.scss'

import IconTextRow from '../IconTextRow'

const BlockSection = ({ title, subtitle, children, subtitleItems }) => {

	function renderSubtitle() {
		return (
			<p className="BlockSection--left__subtitle">{subtitle}</p>
		)
	}

	function renderSubtitleItems() {
		return subtitleItems.map(item => {
			return (
				<IconTextRow key={item.icon + '-' + item.text} icon={item.icon} text={item.text} />
			)
		})
	}

	return (
		<div className="BlockSection">
			<div className="BlockSection--left">
				<h3 className="BlockSection--left__title">{title}</h3>
				{subtitle ? renderSubtitle() : null}
				{subtitleItems ? renderSubtitleItems() : null}
			</div>
			<div className="BlockSection--right">
				{children}
			</div>
		</div>
	)
}

export default BlockSection