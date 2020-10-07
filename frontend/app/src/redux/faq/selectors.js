import { createSelector } from 'reselect'
import config from '../../services/config'

/* How often to update static content?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const FAQ_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000 //15 seconds (debug/development) / 10 minutes (production)

export const faq = (state) => state.faq.data
export const faqKeys = (state) => state.faq.keys
export const hubsLoading = (state) => state.hubs.loading
export const hubsError = (state) => state.hubs.error
export const hubsUpdated = (state) => state.hubs.lastUpdate

export const faqShouldUpdate = createSelector(hubsUpdated, (updated) => {
  return Date.now() - updated > FAQ_UPDATE_INTERVAL
})
