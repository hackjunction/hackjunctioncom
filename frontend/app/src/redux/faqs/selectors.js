import { createSelector } from 'reselect';
import config from '../../services/config';

/* How often to update static content?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */
const FAQ_UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; //15 seconds (debug/development) / 10 minutes (production)

export const faqs = state => state.faq.data;
export const faqsKeys = state => state.faq.keys;
export const faqsLoading = state => state.faq.loading;
export const faqsError = state => state.faq.error;
export const faqsUpdated = state => state.faq.lastUpdate;

export const faqsShouldUpdate = createSelector(
	contentUpdated,
	updated => {
		return Date.now() - updated > FAQ_UPDATE_INTERVAL;
	}
);
