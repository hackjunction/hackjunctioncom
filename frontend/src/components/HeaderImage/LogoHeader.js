import React from 'react'
import './style.scss'

import Image from '../Image'

const LogoHeader = ({ logo, punchline, link, linkText }) => {

	return (
		<div className="LogoHeader">
			<Image
				image={logo}
				alt="logo"
				width={460}
			/>
			<img className="LogoHeader--logo" />
			<span className="LogoHeader--punchline">{punchline}</span>
			{link ? (
				<a className="LogoHeader--link" href={link}>
					<span className="LogoHeader--link__text">{linkText}</span>
				</a>
			) : null}
		</div>
	)
}

export default LogoHeader