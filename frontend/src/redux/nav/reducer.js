import * as ActionTypes from './actionTypes';

const intialState = {
    sidebarOpen: false,
    navTitle: 'Hack the Future'
};

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_SIDEBAR: {
            return {
                ...state,
                sidebarOpen: action.payload
            };
        }

        case ActionTypes.SET_NAV_TITLE: {
            return {
                ...state,
                navTitle: action.payload
            };
        }

        default:
            return state;
    }
}
