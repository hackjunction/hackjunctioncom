import { createSelector } from 'reselect'
import config from '../../services/config'
import { filter, sortBy } from 'lodash-es'
/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000 // 15 seconds (debug/development) / 10 minutes (production)

export const schedules = (state) => state.schedules.data
export const schedulesLoading = (state) => state.schedules.loading
export const schedulesError = (state) => state.schedules.error
export const schedulesUpdated = (state) => state.schedules.lastUpdate

export const schedulesInOrder = createSelector(schedules, (data) => {
  return sortBy(data, 'order')
})

export const schedulesFriday = createSelector(schedulesInOrder, (data) => {
  return filter(data, { day: 'friday' })
})

export const schedulesSaturday = createSelector(schedulesInOrder, (data) => {
  return filter(data, { day: 'saturday' })
})
export const schedulesSunday = createSelector(schedulesInOrder, (data) => {
  return filter(data, { day: 'sunday' })
})

export const schedulesShouldUpdate = createSelector(
  schedulesUpdated,
  (updated) => {
    return Date.now() - updated > UPDATE_INTERVAL
  }
)
