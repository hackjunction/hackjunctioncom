import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update static media?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const MEDIA_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; //15 seconds (debug/development) / 10 minutes (production)

export const media = state => state.staticmedia.data;
export const mediaKeys = state => state.staticmedia.keys;
export const mediaLoading = state => state.staticmedia.loading;
export const mediaError = state => state.staticmedia.error;
export const mediaUpdated = state => state.staticmedia.lastUpdate;

export const mediaShouldUpdate = createSelector(
	mediaUpdated,
	updated => {
		return Date.now() - updated > MEDIA_UPDATE_INTERVAL;
	}
);
