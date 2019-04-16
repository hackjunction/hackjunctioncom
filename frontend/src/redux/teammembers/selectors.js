import { createSelector } from 'reselect';
import { sortBy, filter } from 'lodash-es';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const teammembers = state => state.teammembers.data;
export const teammembersLoading = state => state.teammebers.loading;
export const teammembersError = state => state.teammembers.error;
export const teammembersUpdated = state => state.teammembers.lastUpdate;

export const teammembersShouldUpdate = createSelector(
	teammembersUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
);

export const teammembersByPriority = createSelector(
	teammembers,
	data => {
		return sortBy(data, 'priority')
	}
)

export const finlandTeamByPriority = createSelector(
	teammembersByPriority,
	data => {
		return filter(data, (item) => item.type === 'finland')
	}
)

export const globalTeamByPriority = createSelector(
	teammembersByPriority,
	data => {
		return filter(data, (item) => item.type === 'global')
	}
)
