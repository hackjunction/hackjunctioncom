import * as ActionTypes from './actionTypes'
import JobService from '../../services/job'
import { jobShouldUpdate } from './selectors'

export const updateJobs = () => (dispatch, getState) => {
	if (!jobShouldUpdate(getState())) {
		return
	}

	dispatch({
		type: ActionTypes.UPDATE_JOB,
		promise: JobService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating Job', e)
		}
	})
}
