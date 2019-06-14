import { createSelector } from 'reselect';
import { sortBy, filter } from 'lodash-es';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const eventconcepts = state => state.eventconcepts.data;
export const eventconceptsLoading = state => state.eventconcepts.loading;
export const eventconceptsError = state => state.eventconcepts.error;
export const eventconceptsUpdated = state => state.eventconcepts.lastUpdate;

export const eventconceptsShouldUpdate = createSelector(
	eventconceptsUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
);

export const eventconceptsByPriority = createSelector(
	eventconcepts,
	concepts => {
		return sortBy(concepts, 'priority');
	}
);

export const eventconceptsForHomePage = createSelector(
	eventconceptsByPriority,
	concepts => {
		return filter(concepts, c => c.showOnHomePage);
	}
)

export const eventconceptsForNav = createSelector(
	eventconceptsByPriority,
	concepts => {
		return filter(concepts, c => c.showInNav);
	}
)