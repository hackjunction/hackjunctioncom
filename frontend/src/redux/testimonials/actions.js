import * as ActionTypes from './actionTypes';

import TestimonialService from '../../services/testimonials';

/**
 * Testimonials
 */

const setTestimonialsLoading = () => ({ type: ActionTypes.SET_TESTIMONIALS_LOADING });
const setTestimonialsError = () => ({ type: ActionTypes.SET_TESTIMONIALS_ERROR });

export const updateTestimonials = () => dispatch => {
	dispatch(setTestimonialsLoading());
	TestimonialService.getAll()
		.then(testimonials => {
			dispatch({
				type: ActionTypes.SET_TESTIMONIALS,
				payload: testimonials
			});
		})
		.catch(error => {
			console.log('Error in updateTestimonials', error);
			dispatch(setTestimonialsError());
		});
};