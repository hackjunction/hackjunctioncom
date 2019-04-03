import React from 'react'
import './style.scss'

import { connect } from 'react-redux';
import _ from 'lodash';
import { kpis as selectKpis } from '../../redux/kpis/selectors';

import StatBlock from '../StatBlock'

const StatBlocks = ({ kpis = [] }) => {

	function renderBlocks() {
		return _.map(kpis, kpi => {
			return (
				<StatBlock key={`${kpi.label}-${kpi.number}`} value={kpi.number} label={kpi.label} />
			);
		});
	}

	if (kpis.length === 0) {
		return null;
	}

	return (
		<div className="StatBlocks">
			{renderBlocks()}
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	const { type } = ownProps;
	const kpis = selectKpis(state);

	return {
		kpis: _.filter(kpis, (kpi) => kpi.type.trim() === type)
	}
}

export default connect(mapStateToProps)(StatBlocks)