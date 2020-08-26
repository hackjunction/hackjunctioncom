import * as ActionTypes from "./actionTypes";
import TrackService from "../../services/tracks";
import { tracksShouldUpdate } from "./selectors";

/**
 * Track links
 */

export const updateTracks = () => (dispatch, getState) => {
    if (!tracksShouldUpdate(getState())) {
        return;
    }

    dispatch({
        type: ActionTypes.UPDATE_TRACKS,
        promise: TrackService.getAll(),
        meta: {
            onFailure: (e) => console.log("Error updating tracks", e),
        },
    });
};
