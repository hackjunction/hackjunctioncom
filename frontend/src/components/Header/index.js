import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import _ from 'lodash'

import NavLinkService from '../../services/navlinks'
import NavStack from './NavStack'

class Header extends Component {

	constructor(props) {
		super(props)

		this.state = {
			navlinks: []
		}
	}

	componentDidMount() {
		NavLinkService.getAll().then(navlinks => {
			this.setState({ navlinks })
		})
	}

	renderNavLinks() {
		const { navlinks } = this.state

		const topLevel = _.filter(navlinks, n => !n.parent)

		return _.map(topLevel, navlink => {
			return <NavStack navlink={navlink} />
		})
	}

	render() {
		return (
			<div className="Header">
				<div className="Header_Branding">
					<img className="Header_Branding--logo" src={require('../../assets/logos/text_white.png')} alt="Junction logo" />
				</div>
				<div className="Header_Nav">
					{this.renderNavLinks()}
				</div>
			</div>
		)
	}
}

export default Header
