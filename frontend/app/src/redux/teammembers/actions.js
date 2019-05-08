import * as ActionTypes from './actionTypes';
import TeamMemberService from '../../services/teammembers';
import { teammembersShouldUpdate } from './selectors';

/**
 * Team members
 */

export const updateTeamMembers = () => (dispatch, getState) => {
	if (!teammembersShouldUpdate(getState())) {
		return;
	}

	dispatch({
		type: ActionTypes.UPDATE_TEAM_MEMBERS,
		promise: TeamMemberService.getAll(),
		meta: {
			onFailure: (e) => console.log('Error updating team members', e)
		}
	})
};