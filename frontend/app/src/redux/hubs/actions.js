import * as ActionTypes from './actionTypes'
import HUBService from '../../services/hubs'
import { hubShouldUpdate } from './selectors'

export const updateHUB = () => (dispatch, getState) => {
    if (!hubShouldUpdate(getState())) {
        return
    }

    dispatch({
        type: ActionTypes.UPDATE_HUB,
        promise: HUBService.getAll(),
        meta: {
            onFailure: (e) => console.log('Error updating FAQ', e)
        }
    })
}
