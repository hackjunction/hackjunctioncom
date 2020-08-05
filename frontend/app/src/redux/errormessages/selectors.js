import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update error messages?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const ERROR_MESSAGES_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; //15 seconds (debug/development) / 10 minutes (production)

export const errormessages = state => state.errormessages.data;
export const errormessagesKeys = state => state.errormessages.keys;
export const errormessagesLoading = state => state.errormessages.loading;
export const errormessagesError = state => state.errormessages.error;
export const errormessagesUpdated = state => state.errormessages.lastUpdate;

export const errorMessagesShouldUpdate = createSelector(
	errormessagesUpdated,
	updated => {
		return Date.now() - updated > ERROR_MESSAGES_UPDATE_INTERVAL;
	}
);
