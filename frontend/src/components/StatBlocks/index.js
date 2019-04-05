import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux';
import { map, filter } from 'lodash-es';
import { kpis as selectKpis } from '../../redux/kpis/selectors';
import { updateKpis } from '../../redux/kpis/actions';

import StatBlock from '../StatBlock'

const StatBlocks = ({ kpis, updateKpis }) => {

	useEffect(() => {
		updateKpis();
	}, [])

	function renderBlocks() {
		return map(kpis, kpi => {
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
		kpis: filter(kpis, (kpi) => kpi.type.trim() === type)
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateKpis: () => dispatch(updateKpis())
})

export default connect(mapStateToProps, mapDispatchToProps)(StatBlocks)