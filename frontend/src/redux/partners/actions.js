import * as ActionTypes from './actionTypes';

import PartnerService from '../../services/partners';
import { partnersShouldUpdate } from './selectors';

export const updatePartners = () => (dispatch, getState) => {
	if (!partnersShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_PARTNERS,
		promise: PartnerService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating partners', e)
		}
	});
}
