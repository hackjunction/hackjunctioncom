import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update static content?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const CONTENT_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; //15 seconds (debug/development) / 10 minutes (production)

export const content = state => state.errormessages.data;
export const contentKeys = state => state.errormessages.keys;
export const contentLoading = state => state.errormessages.loading;
export const contentError = state => state.errormessages.error;
export const contentUpdated = state => state.errormessages.lastUpdate;

export const contentShouldUpdate = createSelector(
	contentUpdated,
	updated => {
		return Date.now() - updated > CONTENT_UPDATE_INTERVAL;
	}
);
