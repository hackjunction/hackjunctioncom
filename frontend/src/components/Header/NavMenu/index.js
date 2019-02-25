import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

const NavMenu = ({ isOpen, onClose }) => {

	return (
		<div className="NavMenuWrapper">
			<div className={`NavMenuOverlay ${isOpen ? 'NavMenuOverlay-open' : ''}`} onClick={onClose} />
			<div className={`NavMenu ${isOpen ? 'NavMenu-open' : ''}`}>
				<div className="NavMenu--inner">
					<img className="NavMenu--inner__logo" src={require('../../../assets/logos/text_black.png')} alt="Junction text logo" />
					<div className="NavMenu--inner__menu">
						<h6 className="NavMenu--inner__menu-title">Info</h6>
						<Link className="NavMenu--inner__menu-item" to="/">Story</Link>
						<Link className="NavMenu--inner__menu-item" to="/">Calendar</Link>
						<Link className="NavMenu--inner__menu-item" to="/">Team</Link>

						<h6 className="NavMenu--inner__menu-title">Events & Concepts</h6>
						<Link className="NavMenu--inner__menu-item" to="/">Junction 2019</Link>
						<Link className="NavMenu--inner__menu-item" to="/">Hel Tech</Link>
						<Link className="NavMenu--inner__menu-item" to="/">Hack Talks</Link>
						<Link className="NavMenu--inner__menu-item" to="/">JunctionX</Link>
						<Link className="NavMenu--inner__menu-item" to="/">Hack Tour</Link>
						<Link className="NavMenu--inner__menu-item" to="/">Tech Race</Link>

						<h6 className="NavMenu--inner__menu-title">Community</h6>
						<Link className="NavMenu--inner__menu-item" to="/">For partners</Link>
						<Link className="NavMenu--inner__menu-item" to="/">For participants</Link>
						<Link className="NavMenu--inner__menu-item" to="/">For volunteers</Link>
						<Link className="NavMenu--inner__menu-item" to="/">For organisers</Link>

						<h6 className="NavMenu--inner__menu-title">Contact</h6>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavMenu