import * as ActionTypes from './actionTypes'
import HUBService from '../../services/hubs'
import { hubsShouldUpdate } from './selectors'

export const updateHUB = () => (dispatch, getState) => {
  if (!hubsShouldUpdate(getState())) {
    return
  }

  dispatch({
    type: ActionTypes.UPDATE_HUB,
    promise: HUBService.getAll(),
    meta: {
      onFailure: (e) => console.log('Error updating FAQ', e),
    },
  })
}
