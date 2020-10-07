import { createSelector } from 'reselect'
import { filter, sortBy } from 'lodash-es'

import config from '../../services/config'

/* How often to update static content?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const HUB_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000 //15 seconds (debug/development) / 10 minutes (production)

export const hubs = (state) => state.hubs.data
export const hubsLoading = (state) => state.hubs.loading
export const hubsError = (state) => state.hubs.error
export const hubsUpdated = (state) => state.hubs.lastUpdate

export const hubsShouldUpdate = createSelector(hubsUpdated, (updated) => {
  return Date.now() - updated > HUB_UPDATE_INTERVAL
})

export const mapHubs = createSelector(hubs, (hubs) => {
  return filter(hubs, (e) => e.showOnMap)
})

export const mapHubsByLongitude = createSelector(mapHubs, (hubs) => {
  return sortBy(hubs, (e) => e.longitude)
})
