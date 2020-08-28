import { createSelector } from 'reselect'
import config from '../../services/config'

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000 // 15 seconds (debug/development) / 10 minutes (production)

export const challenges = (state) => state.challenges.data
export const challengesLoading = (state) => state.challenges.loading
export const challengesError = (state) => state.challenges.error
export const challengesUpdated = (state) => state.challenges.lastUpdate

export const challengesShouldUpdate = createSelector(
  challengesUpdated,
  (updated) => {
    return Date.now() - updated > UPDATE_INTERVAL
  }
)
