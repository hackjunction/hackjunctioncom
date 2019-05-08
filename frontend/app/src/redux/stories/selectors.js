import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const stories = state => state.stories.data;
export const storiesLoading = state => state.stories.loading;
export const storiesError = state => state.stories.error;
export const storiesUpdated = state => state.stories.lastUpdate;

export const storiesShouldUpdate = createSelector(
	storiesUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
)