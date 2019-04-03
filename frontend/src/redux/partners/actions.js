import * as ActionTypes from './actionTypes';

import PartnerService from '../../services/partners';

const setPartnersLoading = () => ({ type: ActionTypes.SET_PARTNERS_LOADING });
const setPartnersError = () => ({ type: ActionTypes.SET_PARTNERS_ERROR });

export const updatePartners = () => dispatch => {
	dispatch(setPartnersLoading())
	PartnerService.getAll()
		.then(partners => {
			dispatch({
				type: ActionTypes.SET_PARTNERS,
				payload: partners
			})
		})
		.catch(error => {
			console.log('Error in updatePartners', error);
			dispatch(setPartnersError())
		})
}
