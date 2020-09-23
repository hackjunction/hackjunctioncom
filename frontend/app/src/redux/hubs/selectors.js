import { createSelector } from 'reselect'
import config from '../../services/config'

/* How often to update static content?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const HUB_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000 //15 seconds (debug/development) / 10 minutes (production)

export const hub = state => state.hubs.data
export const hubLoading = state => state.hubs.loading
export const hubError = state => state.hubs.error
export const hubUpdated = state => state.hubs.lastUpdate

export const hubShouldUpdate = createSelector(
    hubUpdated,
    updated => {
        return Date.now() - updated > HUB_UPDATE_INTERVAL
    }
)
