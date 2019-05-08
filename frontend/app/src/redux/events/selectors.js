import { createSelector } from 'reselect';
import { filter } from 'lodash-es';
import moment from 'moment';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const events = state => state.events.data;
export const eventsLoading = state => state.events.loading;
export const eventsError = state => state.events.error;
export const eventsUpdated = state => state.events.lastUpdate;

export const eventsShouldUpdate = createSelector(
	eventsUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
);

export const upcomingEvents = createSelector(
	events,
	events => {
		return filter(events, e => moment(e.begins).add(1, 'days').isAfter())
	}
)