import { createSelector } from 'reselect';
import _ from 'lodash';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const PAGES_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 60 * 1000; //1 minute
const EVENTS_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 5 * 60 * 1000; //5 minutes
const EVENT_CONCEPTS_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 5 * 60 * 1000; //5 minutes
const TEAM_MEMBERS_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 15 * 60 * 1000; //15 minutes
const TESTIMONIALS_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 15 * 60 * 1000; //15 minutes
const SOCIAL_MEDIAS_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 15 * 60 * 1000; //15 minutes
const KPIS_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 15 * 60 * 1000; //15 minutes

export const pages = state => state.content.pages.data;
export const pagesLoading = state => state.content.pages.loading;
export const pagesError = state => state.content.pages.error;
export const pagesUpdated = state => state.content.pages.lastUpdate;

export const pagesShouldUpdate = createSelector(
    pagesUpdated,
    updated => {
        return Date.now() - updated > PAGES_UPDATE_INTERVAL;
    }
);

export const pageBySlug = slug =>
    createSelector(
        pages,
        pages => {
            return _.find(pages, page => {
                return page.slug === slug;
            });
        }
    );

export const pagesByNavSection = section =>
    createSelector(
        pages,
        pages => {
            let filtered = _.filter(pages, page => {
                return page.navSection.trim() === section;
            });

            return _.sortBy(filtered, 'navPriority');
        }
    );

export const events = state => state.content.events.data;
export const eventsLoading = state => state.content.events.loading;
export const eventsError = state => state.content.events.error;
export const eventsUpdated = state => state.content.events.lastUpdate;

export const eventsShouldUpdate = createSelector(
    eventsUpdated,
    updated => {
        return Date.now() - updated > EVENTS_UPDATE_INTERVAL;
    }
);

export const eventsWithFilters = (concept = null, category = null) =>
    createSelector(
        events,
        events => {
            return events.filter(event => {
                if (concept) {
                    if (!event.eventconcept) {
                        return false;
                    }

                    if (event.eventconcept.slug !== concept) {
                        return false;
                    }
                }

                if (category) {
                    if (!event.eventcategory) {
                        return false;
                    }

                    if (event.eventcategory.slug !== category) {
                        return false;
                    }
                }

                return true;
            });
        }
    );

export const eventconcepts = state => state.content.eventconcepts.data;
export const eventconceptsLoading = state => state.content.eventconcepts.loading;
export const eventconceptsError = state => state.content.eventconcepts.error;
export const eventconceptsUpdated = state => state.content.eventconcepts.lastUpdate;

export const eventconceptsShouldUpdate = createSelector(
    eventconceptsUpdated,
    updated => {
        return Date.now() - updated > EVENT_CONCEPTS_UPDATE_INTERVAL;
    }
);

export const eventconceptsByPriority = createSelector(
    eventconcepts,
    concepts => {
        return _.sortBy(concepts, 'priority');
    }
);

export const eventconceptBySlug = slug =>
    createSelector(
        eventconcepts,
        concepts => {
            return _.find(concepts, concept => {
                return concept.slug === slug;
            });
        }
    );

export const eventconceptImage = slug =>
    createSelector(
        eventconcepts,
        concepts => {
            let concept = _.find(concepts, concept => {
                return concept.slug === slug;
            });

            return concept ? concept.image : null;
        }
    );

export const teammembers = state => state.content.teammembers.data;
export const teammembersLoading = state => state.content.teammebers.loading;
export const teammembersError = state => state.content.teammembers.error;
export const teammembersUpdated = state => state.content.teammembers.lastUpdate;

export const teammembersShouldUpdate = createSelector(
    teammembersUpdated,
    updated => {
        return Date.now() - updated > TEAM_MEMBERS_UPDATE_INTERVAL;
    }
);

export const testimonials = state => state.content.testimonials.data;
export const testimonialsLoading = state => state.content.testimonials.loading;
export const testimonialsError = state => state.content.testimonials.error;
export const testimonialsUpdated = state => state.content.testimonials.lastUpdate;

export const testimonialsShouldUpdate = createSelector(
    testimonialsUpdated,
    updated => {
        return Date.now() - updated > TESTIMONIALS_UPDATE_INTERVAL;
    }
);

export const testimonialsOfType = type =>
    createSelector(
        testimonials,
        testimonials => {
            return _.filter(testimonials, t => t.type.trim() === type);
        }
    );

export const socialmedias = state => state.content.socialmedias.data;
export const socialmediasLoading = state => state.content.socialmedias.loading;
export const socialmediasError = state => state.content.socialmedias.error;
export const socialmediasUpdated = state => state.content.socialmedias.lastUpdate;

export const socialMediasShouldUpdate = createSelector(
    socialmediasUpdated,
    updated => {
        return Date.now() - updated > SOCIAL_MEDIAS_UPDATE_INTERVAL;
    }
);

export const kpis = state => state.content.kpis.data;
export const kpisLoading = state => state.content.kpis.loading;
export const kpisError = state => state.content.kpis.error;
export const kpisUpdated = state => state.content.kpis.lastUpdate;

export const kpisShouldUpdate = createSelector(
    kpisUpdated,
    updated => {
        return Date.now() - updated > KPIS_UPDATE_INTERVAL;
    }
);

export const kpisOfType = type =>
    createSelector(
        kpis,
        kpis => {
            return _.filter(kpis, t => t.type.trim() === type);
        }
    );
