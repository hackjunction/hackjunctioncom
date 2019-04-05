import { createSelector } from 'reselect';
import { filter } from 'lodash-es';
import config from '../../services/config';

/* How often to update a given content type?
 *
 * If site is being used in DEBUG mode, update always when possible.
 */

const UPDATE_INTERVAL = config.IS_DEBUG ? 15 * 1000 : 10 * 60 * 1000; // 15 seconds (debug/development) / 10 minutes (production)

export const kpis = state => state.kpis.data;
export const kpisLoading = state => state.kpis.loading;
export const kpisError = state => state.kpis.error;
export const kpisUpdated = state => state.kpis.lastUpdate;

export const kpisShouldUpdate = createSelector(
	kpisUpdated,
	updated => {
		return Date.now() - updated > UPDATE_INTERVAL;
	}
);

/* Don't use this directly in mapStateToProps - performance implications!
 * https://github.com/reduxjs/reselect#q-how-do-i-create-a-selector-that-takes-an-argument
 */
const kpisOfType = type =>
	createSelector(
		kpis,
		kpis => {
			return filter(kpis, t => t.type.trim() === type);
		}
	);

/* Build selectors with pre-defined filters instead */
export const genericKpis = kpisOfType('generic');
export const partnerKpis = kpisOfType('partner');
export const participantKpis = kpisOfType('participant');
export const organiserKpis = kpisOfType('organiser');
export const volunteerKpis = kpisOfType('volunteer');