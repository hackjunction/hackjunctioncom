import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import _ from 'lodash'

import NavLinkService from '../../services/navlinks'

class Nav extends Component {

	constructor(props) {
		super(props)

		this.state = {
			navlinks: [],
			expanded: false,
		}
	}

	componentDidMount() {
		NavLinkService.getAll().then(navlinks => {
			this.setState({ navlinks })
		})
	}

	renderNavLinks(links) {
		return _.map(links, (navlink, index) => {
			return (
				<div className="Nav_Item" style={{ '--n': index + 1 }}>
					<a href={navlink.linkTo}>{navlink.name}</a>
					{this.renderNavLinks(navlink.children)}
				</div>
			)
		})
	}

	render() {

		const { expanded } = this.state

		const parentLinks = _.filter(this.state.navlinks, n => !n.parent)

		return (
			<div className="Nav--Wrapper">
				<div className={`Nav ${expanded ? 'expanded' : ''}`} onClick={() => this.setState({ expanded: !expanded })}>
					<div className="Nav_Icon">
						<i className="fas fa-bars"></i>
					</div>
					{this.renderNavLinks(parentLinks)}
				</div>
				<div className="Nav--Overlay" />
			</div>
		)
	}
}

export default Nav