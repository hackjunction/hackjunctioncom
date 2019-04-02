import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update media?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const MEDIA_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 5 * 60 * 1000; //5 minutes

export const media = state => state.media.data;
export const mediaLoading = state => state.media.loading;
export const mediaError = state => state.media.error;
export const mediaUpdated = state => state.media.lastUpdate;

export const mediaShouldUpdate = createSelector(
    mediaUpdated,
    updated => {
        return Date.now() - updated > MEDIA_UPDATE_INTERVAL;
    }
);
