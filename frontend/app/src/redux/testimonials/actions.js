import * as ActionTypes from './actionTypes';
import TestimonialService from '../../services/testimonials';
import { testimonialsShouldUpdate } from './selectors';

/**
 * Testimonials
 */

export const updateTestimonials = () => (dispatch, getState) => {
	if (!testimonialsShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_TESTIMONIALS,
		promise: TestimonialService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating testimonials', e)
		}
	})
};