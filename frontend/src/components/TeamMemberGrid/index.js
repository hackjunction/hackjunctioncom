import React from 'react'
import './style.scss'

const TeamMemberGrid = ({ teamMembers }) => {

	function renderTeamMembers() {
		return teamMembers.map(person => {
			return (
				<div className="TeamMemberGrid--item">
					<div className="TeamMemberGrid--item__top">
						<div className="TeamMemberGrid--item__flipper">
							<div className="TeamMemberGrid--item__flipper-front">
								<img className="TeamMemberGrid--item__image" src={require('../../assets/logos/emblem_white.png')} alt={person.name} />
							</div>
							<div className="TeamMemberGrid--item__flipper-back">
								<img className="TeamMemberGrid--item__gif" src={person.gif} alt={person.name + ' gif'} />
							</div>
						</div>
					</div>
					<div className="TeamMemberGrid--item__bottom">
						<h4 className="TeamMemberGrid--item__name">{person.name}</h4>
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

export default TeamMemberGrid