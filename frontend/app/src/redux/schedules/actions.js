import * as ActionTypes from './actionTypes'
import SchedulesService from '../../services/schedule'
import { challengesShouldUpdate } from './selectors'

/**
 * Challenge links
 */

export const updateSchedules = () => (dispatch, getState) => {
  if (!schedulesShouldUpdate(getState())) {
    return
  }

  dispatch({
    type: ActionTypes.UPDATE_SCHEDULES,
    promise: SchedulesService.getAll(),
    meta: {
      onFailure: (e) => console.log('Error updating schedules', e),
    },
  })
}
