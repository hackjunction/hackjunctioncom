import React from 'react'
import './style.scss'

import { connect } from 'react-redux'

import NavMenu from './NavMenu';

import * as NavActions from '../../redux/nav/actions'

const Header = ({ toggleSidebar }) => {

	return (
		<header className="Header">
			<div className="Header--menu-button" onClick={() => toggleSidebar(true)}>
				<i className="Header--menu-button fas fa-bars"></i>
			</div>
			<img className="Header--emblem" src={require('../../assets/logos/emblem_white.png')} alt="Junction logo" />
			<NavMenu />
		</header>
	)
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
	toggleSidebar: (open) => dispatch(NavActions.toggleSidebar(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
