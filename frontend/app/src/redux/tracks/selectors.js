import { createSelector } from "reselect";
import config from "../../services/config";

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const tracks = (state) => state.tracks.data;
export const tracksLoading = (state) => state.tracks.loading;
export const tracksError = (state) => state.tracks.error;
export const tracksUpdated = (state) => state.tracks.lastUpdate;

export const tracksShouldUpdate = createSelector(tracksUpdated, (updated) => {
    return Date.now() - updated > UPDATE_INTERVAL;
});
