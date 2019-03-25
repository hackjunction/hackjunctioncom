import { createSelector } from 'reselect'
import _ from 'lodash'
import config from '../../services/config'

import MEDIA_KEYS from './keys'

/* How often to update media?
 *
 * If site is being used in DEBUG mode, update always when possible.
*/
const MEDIA_UPDATE_INTERVAL = config.IS_DEBUG ? 0 : 5 * 60 * 1000 //5 minutes

export const media = state => state.media.data
export const mediaLoading = state => state.media.loading
export const mediaError = state => state.media.error
export const mediaUpdated = state => state.media.lastUpdate

export const mediaShouldUpdate = createSelector(
	mediaUpdated,
	(updated) => {
		return Date.now() - updated > MEDIA_UPDATE_INTERVAL
	}
)

export const objectWithKeys = (selectKeys = []) => createSelector(
	media,
	(data) => {
		const res = {}

		_.each(selectKeys, selectKey => {
			if (typeof selectKey == 'undefined') throw new Error('Trying to get undefined media key')
			const item = _.find(data, ({ key, content }) => key.trim() === selectKey)
			res[selectKey] = item ? item.media : null
		})

		return res
	}
)

export const mediaByKey = (selectKey) => createSelector(
	media,
	(data) => {
		let item = _.find(data, ({ key, media }) => key.trim() === selectKey)

		if (!item) {
			item = _.find(data, ({ key, media }) => key.trim() === MEDIA_KEYS.defaultBackgroundImage)
		}

		return item ? item.media : null
	}
)