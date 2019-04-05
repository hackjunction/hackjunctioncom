import { createSelector } from 'reselect';
import { filter } from 'lodash-es';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const testimonials = state => state.testimonials.data;
export const testimonialsLoading = state => state.testimonials.loading;
export const testimonialsError = state => state.testimonials.error;
export const testimonialsUpdated = state => state.testimonials.lastUpdate;

export const testimonialsShouldUpdate = createSelector(
	testimonialsUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
);

/* Don't use this directly in mapStateToProps - performance implications!
 * https://github.com/reduxjs/reselect#q-how-do-i-create-a-selector-that-takes-an-argument
 */
const testimonialsOfType = type =>
	createSelector(
		testimonials,
		testimonials => {
			return filter(testimonials, t => t.type.trim() === type);
		}
	);

/* Build selectors with pre-defined filters instead */
export const organiserTestimonials = testimonialsOfType('organiser');
export const partnerTestimonials = testimonialsOfType('partner');
export const volunteerTestimonials = testimonialsOfType('volunteer');
export const participantTestimonials = testimonialsOfType('participant');
export const genericTestimonials = testimonialsOfType('generic');