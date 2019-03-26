import * as ActionTypes from './actionTypes';

/* All content has the same state structure, so let's define a generic object for that
 * instead of duplicating that for each type of content.
 */
const initialSubState = {
    data: [],
    loading: false,
    error: false,
    lastUpdate: 0
};

export const initialState = {
    pages: initialSubState,
    events: initialSubState,
    eventconcepts: initialSubState,
    teammembers: initialSubState,
    testimonials: initialSubState,
    socialmedias: initialSubState,
    kpis: initialSubState
};

/** All content has the same actions (set content, set loading, set error, ...)
 * so let's define some generic helper functions to perform state updates to them instead
 * of duplicating the code every time.
 */
function setData(state, key, payload) {
    return {
        ...state,
        [key]: {
            ...state[key],
            data: payload,
            loading: false,
            lastUpdate: Date.now()
        }
    };
}

function setLoading(state, key) {
    return {
        ...state,
        [key]: {
            ...state[key],
            loading: true,
            error: false
        }
    };
}

function setError(state, key) {
    return {
        ...state,
        [key]: {
            ...state[key],
            loading: false,
            error: true
        }
    };
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_PAGES:
            return setData(state, 'pages', action.payload);
        case ActionTypes.SET_PAGES_LOADING:
            return setLoading(state, 'pages');
        case ActionTypes.SET_PAGES_ERROR:
            return setError(state, 'pages');

        case ActionTypes.SET_EVENTS:
            return setData(state, 'events', action.payload);
        case ActionTypes.SET_EVENTS_LOADING:
            return setLoading(state, 'events');
        case ActionTypes.SET_EVENTS_ERROR:
            return setError(state, 'events');

        case ActionTypes.SET_EVENT_CONCEPTS:
            return setData(state, 'eventconcepts', action.payload);
        case ActionTypes.SET_EVENT_CONCEPTS_LOADING:
            return setLoading(state, 'eventconcepts');
        case ActionTypes.SET_EVENT_CONCEPTS_ERROR:
            return setError(state, 'eventconcepts');

        case ActionTypes.SET_TEAM_MEMBERS:
            return setData(state, 'teammembers', action.payload);
        case ActionTypes.SET_TEAM_MEMBERS_LOADING:
            return setLoading(state, 'teammembers');
        case ActionTypes.SET_TEAM_MEMBERS_ERROR:
            return setError(state, 'teammembers');

        case ActionTypes.SET_TESTIMONIALS:
            return setData(state, 'testimonials', action.payload);
        case ActionTypes.SET_TESTIMONIALS_LOADING:
            return setLoading(state, 'testimonials');
        case ActionTypes.SET_TESTIMONIALS_ERROR:
            return setError(state, 'testimonials');

        case ActionTypes.SET_SOCIAL_MEDIAS:
            return setData(state, 'socialmedias', action.payload);
        case ActionTypes.SET_SOCIAL_MEDIAS_LOADING:
            return setLoading(state, 'socialmedias');
        case ActionTypes.SET_SOCIAL_MEDIAS_ERROR:
            return setError(state, 'socialmedias');

        case ActionTypes.SET_KPIS:
            return setData(state, 'kpis', action.payload);
        case ActionTypes.SET_KPIS_LOADING:
            return setLoading(state, 'kpis');
        case ActionTypes.SET_KPIS_ERROR:
            return setError(state, 'kpis');

        default:
            return state;
    }
}
