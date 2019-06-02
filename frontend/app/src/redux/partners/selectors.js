import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const partners = state => state.partners.data;
export const partnersLoading = state => state.partners.loading;
export const partnersError = state => state.partners.error;
export const partnersUpdated = state => state.partners.lastUpdate;

export const partnersShouldUpdate = createSelector(
	partnersUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
)

export const showcasedPartners = createSelector(
	partners,
	partners => {
		return partners.filter(p => p.showcase);
	}
)