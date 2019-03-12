import { createSelector } from 'reselect'

const EVENTS_UPDATE_INTERVAL = 5 * 60 * 1000 //5 minutes

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