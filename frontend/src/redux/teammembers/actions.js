import * as ActionTypes from './actionTypes';

import TeamMemberService from '../../services/teammembers';

/**
 * Team members
 */

const setTeamMembersLoading = () => ({ type: ActionTypes.SET_TEAM_MEMBERS_LOADING });
const setTeamMembersError = () => ({ type: ActionTypes.SET_TEAM_MEMBERS_ERROR });

export const updateTeamMembers = () => dispatch => {
	dispatch(setTeamMembersLoading());
	TeamMemberService.getAll()
		.then(teammembers => {
			dispatch({
				type: ActionTypes.SET_TEAM_MEMBERS,
				payload: teammembers
			});
		})
		.catch(error => {
			console.log('Error in updateTeamMembers', error);
			dispatch(setTeamMembersError());
		});
};