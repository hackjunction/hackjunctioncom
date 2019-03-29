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
const PARTNERS_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 15 * 60 * 1000; //15 minutes
const STORIES_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 15 * 60 * 1000; //15 minutes

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

const pagesByNavSection = section =>
    createSelector(
        pages,
        pages => {
            let filtered = _.filter(pages, page => {
                return page.navSection.trim() === section;
            });

            return _.sortBy(filtered, 'navPriority');
        }
    );

export const homePages = pagesByNavSection('home');
export const eventPages = pagesByNavSection('events');
export const communityPages = pagesByNavSection('community');

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

/* Don't use this directly in mapStateToProps - performance implications!
 * https://github.com/reduxjs/reselect#q-how-do-i-create-a-selector-that-takes-an-argument
 */
const testimonialsOfType = type =>
    createSelector(
        testimonials,
        testimonials => {
            return _.filter(testimonials, t => t.type.trim() === type);
        }
    );

/* Build selectors with pre-defined filters instead */
export const organiserTestimonials = testimonialsOfType('organiser');
export const partnerTestimonials = testimonialsOfType('partner');
export const volunteerTestimonials = testimonialsOfType('volunteer');
export const participantTestimonials = testimonialsOfType('participant');
export const genericTestimonials = testimonialsOfType('generic');

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

/* Don't use this directly in mapStateToProps - performance implications!
 * https://github.com/reduxjs/reselect#q-how-do-i-create-a-selector-that-takes-an-argument
 */
const kpisOfType = type =>
    createSelector(
        kpis,
        kpis => {
            return _.filter(kpis, t => t.type.trim() === type);
        }
    );

/* Build selectors with pre-defined filters instead */
export const genericKpis = kpisOfType('generic');
export const partnerKpis = kpisOfType('partner');
export const participantKpis = kpisOfType('participant');
export const organiserKpis = kpisOfType('organiser');
export const volunteerKpis = kpisOfType('volunteer');


export const partners = state => state.content.partners.data;
export const partnersLoading = state => state.content.partners.loading;
export const partnersError = state => state.content.partners.error;
export const partnersUpdated = state => state.content.partners.lastUpdate;

export const partnersShouldUpdate = createSelector(
    partnersUpdated,
    updated => {
        return Date.now() - updated > PARTNERS_UPDATE_INTERVAL;
    }
)

export const stories = state => state.content.stories.data;
export const storiesLoading = state => state.content.stories.loading;
export const storiesError = state => state.content.stories.error;
export const storiesUpdated = state => state.content.stories.lastUpdate;

export const storiesShouldUpdate = createSelector(
    storiesUpdated,
    updated => {
        return Date.now() - updated > STORIES_UPDATE_INTERVAL;
    }
)