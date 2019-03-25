import { createSelector } from 'reselect'
import _ from 'lodash'
import config from '../../services/config'

/* How often to update static content?
 *
 * If site is being used in DEBUG mode, update always when possible.
*/
const CONTENT_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 5 * 60 * 1000 //5 minutes

export const content = state => state.static.data
export const contentLoading = state => state.static.loading
export const contentError = state => state.static.error
export const contentUpdated = state => state.static.lastUpdate

export const contentShouldUpdate = createSelector(
	contentUpdated,
	(updated) => {
		return Date.now() - updated > CONTENT_UPDATE_INTERVAL
	}
)

export const objectWithKeys = (selectKeys = []) => createSelector(
	content,
	(data) => {
		const res = {}

		_.each(selectKeys, selectKey => {
			if (typeof selectKey == 'undefined') throw new Error('Trying to get undefined content key')
			const item = _.find(data, ({ key, content }) => key.trim() === selectKey)
			res[selectKey] = item ? item.content : (config.IS_DEBUG ? `{${selectKey}}` : null)
		})

		return res
	}
)