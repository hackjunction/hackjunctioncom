import * as ActionTypes from './actionTypes';

export const toggleSidebar = open => dispatch => {
    dispatch({
        type: ActionTypes.TOGGLE_SIDEBAR,
        payload: open
    });
};

export const setNavTitle = title => dispatch => {
    dispatch({
        type: ActionTypes.SET_NAV_TITLE,
        payload: title
    });
};
