import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update static content?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const JOB_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; //15 seconds (debug/development) / 10 minutes (production)

export const job = state => state.job.data;
export const jobKeys = state => state.job.keys;
export const jobLoading = state => state.job.loading;
export const jobError = state => state.job.error;
export const jobUpdated = state => state.job.lastUpdate;

export const jobShouldUpdate = createSelector(
	jobUpdated,
	updated => {
		return Date.now() - updated > JOB_UPDATE_INTERVAL;
	}
);
