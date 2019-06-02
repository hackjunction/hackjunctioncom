import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const onlineEvents = state => state.onlineevents.data;
export const onlineEventsLoading = state => state.onlineevents.loading;
export const onlineEventsError = state => state.onlineevents.error;
export const onlineEventsUpdated = state => state.onlineevents.lastUpdate;

export const onlineEventsShouldUpdate = createSelector(
	onlineEventsUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
);