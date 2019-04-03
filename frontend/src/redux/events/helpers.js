import _ from 'lodash';

export const filterEvents = (events, conceptSlug = null, categorySlug = null) => {
	return _.filter(events, e => {
		if (conceptSlug) {
			if (e.eventconcept) {
				return e.eventconcept.slug === conceptSlug;
			}
			return false;
		}

		if (categorySlug) {
			if (e.eventcategory) {
				return e.eventcategory.slug === categorySlug;
			}
			return false;
		}

		return true;
	})
}