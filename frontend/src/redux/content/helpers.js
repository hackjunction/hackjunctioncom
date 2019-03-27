import _ from 'lodash';

export const getConceptBySlug = (concepts, slug) => {
    return _.find(concepts, c => c.slug === slug);
};

export const getTestimonialsOfType = (testimonials, type) => {
    return _.filter(testimonials, t => t.type.trim() === type);
};

export const getPageBySlug = (pages, slug) => {
    return _.find(pages, p => p.slug === slug);
};

export const getEventsFiltered = (events, concept = null, category = null) => {
    return _.filter(events, event => {
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
};
