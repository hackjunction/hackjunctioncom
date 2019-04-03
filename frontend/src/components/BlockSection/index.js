import React from 'react'
import './style.scss'
import { connect } from 'react-redux';

import { content as selectContent } from '../../redux/staticcontent/selectors'


import IconTextRow from '../IconTextRow'

const BlockSection = ({ title, subtitle, children }) => {

	return (
		<div className="BlockSection">
			<div className="BlockSection--left">
				<h3 className="BlockSection--left__title">{title}</h3>
				<p className="BlockSection--left__subtitle">{subtitle}</p>
			</div>
			<div className="BlockSection--right">
				{children}
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	const { titleKey, subtitleKey } = ownProps;

	const content = selectContent(state);

	return {
		title: content[ownProps.titleKey] || ownProps.title,
		subtitle: content[ownProps.subtitleKey] || ownProps.subtitle,
	}
};

export default connect(mapStateToProps)(BlockSection)