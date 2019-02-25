import React, { useState } from 'react'
import './style.scss'

import NavMenu from './NavMenu';

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<div className="Header">
			<div className="Header--menu-button" onClick={() => setMenuOpen(true)}>
				<i className="Header--menu-button fas fa-bars"></i>
			</div>
			<img className="Header--emblem" src={require('../../assets/logos/emblem_white.png')} alt="Junction logo" />
			<NavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
		</div>
	)
}

export default Header
