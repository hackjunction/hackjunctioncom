import React from 'react'
import './style.scss'

import DebugPlaceholder from '../DebugPlaceholder'

const DEFAULT_GIF = require('../../assets/logos/emblem_white.png')
const DEFAULT_IMG = require('../../assets/logos/emblem_white.png')

const TeamMemberGrid = ({ teamMembers }) => {

	function renderTeamMembers() {

		if (!Array.isArray(teamMembers) || teamMembers.length === 0) {
			return (
				<DebugPlaceholder
					title="Team members"
					description="Add team members"
				/>
			)
		}

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

export default TeamMemberGrid