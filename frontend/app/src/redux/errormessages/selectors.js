import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update error messages?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const ERROR_MESSAGES_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; //15 seconds (debug/development) / 10 minutes (production)

export const content = state => state.errormessages.data;
export const contentKeys = state => state.errormessages.keys;
export const contentLoading = state => state.errormessages.loading;
export const contentError = state => state.errormessages.error;
export const contentUpdated = state => state.errormessages.lastUpdate;

export const errorMessagesShouldUpdate = createSelector(
	contentUpdated,
	updated => {
		return Date.now() - updated > ERROR_MESSAGES_UPDATE_INTERVAL;
	}
);
