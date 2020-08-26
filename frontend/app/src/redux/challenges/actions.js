import * as ActionTypes from './actionTypes'
import ChallengeService from '../../services/challenges'
import { challengesShouldUpdate } from './selectors'

/**
 * Challenge links
 */

export const updateChallenges = () => (dispatch, getState) => {
  if (!challengesShouldUpdate(getState())) {
    return
  }

  dispatch({
    type: ActionTypes.UPDATE_TRACKS,
    promise: ChallengeService.getAll(),
    meta: {
      onFailure: (e) => console.log('Error updating challenges', e),
    },
  })
}
