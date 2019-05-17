import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux';
import { finlandTeamByPriority, globalTeamByPriority } from '../../redux/teammembers/selectors';
import { updateTeamMembers } from '../../redux/teammembers/actions';
import Image from '../Image';
import Divider from '../Divider';

const TeamMemberGrid = ({ title, teamMembers, updateTeamMembers }) => {

	useEffect(() => {
		updateTeamMembers();
	}, [])

	function renderTeamMembers() {
		return teamMembers.map(person => {
			return (
				<div className="TeamMemberGrid--item" key={person.fullName + '-' + person.email}>
					<div className="TeamMemberGrid--item__top">
						<div className="TeamMemberGrid--item__flipper">
							<div className="TeamMemberGrid--item__flipper-front">
								<Image className="TeamMemberGrid--item__image" image={person.image} alt={person.fullName} width={280} height={280} />
							</div>
							<div className="TeamMemberGrid--item__flipper-back">
								<Image className="TeamMemberGrid--item__gif" image={person.gif} alt={person.fullName + ' gif'} width={280} height={280} crop={'fit'} />
							</div>
						</div>
					</div>
					<div className="TeamMemberGrid--item__bottom">
						<h4 className="TeamMemberGrid--item__name">{person.fullName}</h4>
						<span className="TeamMemberGrid--item__title">{person.title}</span>
						<span className="TeamMemberGrid--item__email">{person.email}</span>
					</div>
				</div>
			)
		})
	}

	if (!teamMembers || teamMembers.length === 0) {
		return null;
	}

	return (
		<div className="TeamMemberGrid">
			<h2 className="TeamMemberGrid--title">{title}</h2>
			<Divider sm />
			<div className="TeamMemberGrid--items">
				{renderTeamMembers()}
			</div>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => {
	const { type } = ownProps;

	let teamMembers = [];
	let title = null;
	switch (type) {
		case 'finland': {
			teamMembers = finlandTeamByPriority(state);
			title = 'Finland team';
			break;
		}
		case 'global': {
			teamMembers = globalTeamByPriority(state);
			title = 'Global organizers';
			break;
		}
		default: break;
	}

	return {
		teamMembers,
		title
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateTeamMembers: () => dispatch(updateTeamMembers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberGrid)