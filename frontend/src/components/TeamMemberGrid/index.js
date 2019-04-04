import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux';
import { teammembersByPriority } from '../../redux/teammembers/selectors';
import { updateTeamMembers } from '../../redux/teammembers/actions';

const DEFAULT_GIF = require('../../assets/logos/emblem_white.png')
const DEFAULT_IMG = require('../../assets/logos/emblem_white.png')

const TeamMemberGrid = ({ teamMembers, updateTeamMembers }) => {

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
								<img className="TeamMemberGrid--item__image" src={person.image ? person.image.url : DEFAULT_IMG} alt={person.name} />
							</div>
							<div className="TeamMemberGrid--item__flipper-back">
								<img className="TeamMemberGrid--item__gif" src={person.gif ? person.gif.url : DEFAULT_GIF} alt={person.name + ' gif'} />
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

	return (
		<div className="TeamMemberGrid">
			{renderTeamMembers()}
		</div>
	)
}

const mapStateToProps = (state) => ({
	teamMembers: teammembersByPriority(state),
})

const mapDispatchToProps = (dispatch) => ({
	updateTeamMembers: () => dispatch(updateTeamMembers())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberGrid)