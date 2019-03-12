import { createSelector } from 'reselect'

const EVENTS_UPDATE_INTERVAL = 5 * 60 * 1000 //5 minutes
const EVENT_CONCEPTS_UPDATE_INTERVAL = 5 * 60 * 1000 //5 minutes

export const events = state => state.content.events.data
export const eventsLoading = state => state.content.events.loading
export const eventsError = state => state.content.events.error
export const eventsUpdated = state => state.content.events.lastUpdate

export const eventsShouldUpdate = createSelector(
	eventsUpdated,
	(updated) => {
		return Date.now() - updated > EVENTS_UPDATE_INTERVAL
	}
)

export const eventconcepts = state => state.content.eventconcepts.data
export const eventconceptsLoading = state => state.content.eventconcepts.loading
export const eventconceptsError = state => state.content.eventconcepts.error
export const eventconceptsUpdated = state => state.content.eventconcepts.updated

export const eventconceptsShouldUpdate = createSelector(
	eventconceptsUpdated,
	(updated) => {
		return Date.now() - updated > EVENT_CONCEPTS_UPDATE_INTERVAL
	}
)