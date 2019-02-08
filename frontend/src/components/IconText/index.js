import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

class IconText extends Component {

	static propTypes = {
		icon: PropTypes.string,
		text: PropTypes.string,
		cta: PropTypes.string,
		onClick: PropTypes.func,
	}

	render() {
		const { text, icon, cta, onClick } = this.props
		return (
			<div className="IconText">
				<div className="IconText_icon">
					<i className={icon}></i>
				</div>
				<p className="IconText_text">{text}</p>
				{cta && onClick ? (
					<div className="IconText_cta" onClick={onClick}>
						<span className="IconText_cta-text">{cta}</span>
					</div>
				) : null}
			</div>
		)
	}
}

export default IconText