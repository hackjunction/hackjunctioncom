import * as ActionTypes from './actionTypes';
import KpiService from '../../services/kpis';
import { kpisShouldUpdate } from './selectors';

export const updateKpis = () => (dispatch, getState) => {
	if (!kpisShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_KPIS,
		promise: KpiService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error in updating kpis', e)
		}
	});
};
