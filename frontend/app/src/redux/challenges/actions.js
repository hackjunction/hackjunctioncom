import * as ActionTypes from './actionTypes'
import ChallengeService from '../../services/challenge'
import { challengesShouldUpdate } from './selectors'

/**
 * Challenge links
 */

export const updateChallenges = () => (dispatch, getState) => {
  if (!challengesShouldUpdate(getState())) {
    return
  }

  dispatch({
    type: ActionTypes.UPDATE_CHALLENGES,
    promise: ChallengeService.getAll(),
    meta: {
      onFailure: (e) => console.log('Error updating challenges', e),
    },
  })
}
