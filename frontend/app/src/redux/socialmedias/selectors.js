import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const socialmedias = state => state.socialmedias.data;
export const socialmediasLoading = state => state.socialmedias.loading;
export const socialmediasError = state => state.socialmedias.error;
export const socialmediasUpdated = state => state.socialmedias.lastUpdate;

export const socialMediasShouldUpdate = createSelector(
	socialmediasUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
);