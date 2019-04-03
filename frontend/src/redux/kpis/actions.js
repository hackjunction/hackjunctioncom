import * as ActionTypes from './actionTypes';

import KpiService from '../../services/kpis';

const setKpisLoading = () => ({ type: ActionTypes.SET_KPIS_LOADING });
const setKpisError = () => ({ type: ActionTypes.SET_KPIS_ERROR });

export const updateKpis = () => dispatch => {
	dispatch(setKpisLoading());
	KpiService.getAll()
		.then(kpis => {
			dispatch({
				type: ActionTypes.SET_KPIS,
				payload: kpis
			});
		})
		.catch(error => {
			console.log('Error in updateKpis', error);
			dispatch(setKpisError());
		});
};
