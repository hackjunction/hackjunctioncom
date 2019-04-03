import * as ActionTypes from './actionTypes';

import SocialMediaService from '../../services/socialmedias';

/**
 * Social media links
 */

const setSocialMediasLoading = () => ({ type: ActionTypes.SET_SOCIAL_MEDIAS_LOADING });
const setSocialMediasError = () => ({ type: ActionTypes.SET_SOCIAL_MEDIAS_ERROR });

export const updateSocialMedias = () => dispatch => {
	dispatch(setSocialMediasLoading());
	SocialMediaService.getAll()
		.then(socialmedias => {
			dispatch({
				type: ActionTypes.SET_SOCIAL_MEDIAS,
				payload: socialmedias
			});
		})
		.catch(error => {
			console.log('Error in updateSocialMedias', error);
			dispatch(setSocialMediasError());
		});
};