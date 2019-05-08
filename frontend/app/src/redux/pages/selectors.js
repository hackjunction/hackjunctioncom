import { createSelector } from 'reselect';
import { filter, sortBy } from 'lodash-es';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const pages = state => state.pages.data;
export const pagesLoading = state => state.pages.loading;
export const pagesError = state => state.pages.error;
export const pagesUpdated = state => state.pages.lastUpdate;

export const pagesShouldUpdate = createSelector(
	pagesUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
);

const pagesByNavSection = section =>
	createSelector(
		pages,
		pages => {
			let filtered = filter(pages, page => {
				return !!page.navSection && page.navSection.trim() === section;
			});

			return sortBy(filtered, 'navPriority');
		}
	);

export const homePages = pagesByNavSection('home');
export const eventPages = pagesByNavSection('events');
export const communityPages = pagesByNavSection('community');