import { createSelector } from 'reselect'
import _ from 'lodash'

const EVENTS_UPDATE_INTERVAL = 0 //5 * 60 * 1000 //5 minutes
const EVENT_CONCEPTS_UPDATE_INTERVAL = 0 //5 * 60 * 1000 //5 minutes
const TEAM_MEMBERS_UPDATE_INTERVAL = 0 //5 * 60 * 1000 //15 minutes

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

export const eventsWithFilters = (concept = null, category = null) => createSelector(
	events,
	(events) => {
		return events.filter(event => {

			if (concept) {
				if (!event.eventconcept) {
					return false
				}

				if (event.eventconcept.slug !== concept) {
					return false
				}
			}

			if (category) {
				if (!event.eventcategory) {
					return false
				}

				if (event.eventcategory.slug !== category) {
					return false
				}
			}

			return true
		})
	}
)


export const eventconcepts = state => state.content.eventconcepts.data
export const eventconceptsLoading = state => state.content.eventconcepts.loading
export const eventconceptsError = state => state.content.eventconcepts.error
export const eventconceptsUpdated = state => state.content.eventconcepts.lastUpdate

export const eventconceptsShouldUpdate = createSelector(
	eventconceptsUpdated,
	(updated) => {
		return Date.now() - updated > EVENT_CONCEPTS_UPDATE_INTERVAL
	}
)

export const eventconceptBySlug = (slug) => createSelector(
	eventconcepts,
	(concepts) => {
		return _.find(concepts, concept => {
			return concept.slug === slug
		})
	}
)

export const eventconceptImage = (slug) => createSelector(
	eventconcepts,
	(concepts) => {
		let concept = _.find(concepts, concept => {
			return concept.slug === slug
		})

		return concept ? concept.image : null
	}
)

export const teammembers = state => state.content.teammembers.data
export const teammembersLoading = state => state.content.teammebers.loading
export const teammembersError = state => state.content.teammembers.error
export const teammembersUpdated = state => state.content.teammembers.lastUpdate

export const teammembersShouldUpdate = createSelector(
	teammembersUpdated,
	(updated) => {
		return Date.now() - updated > TEAM_MEMBERS_UPDATE_INTERVAL
	}
)