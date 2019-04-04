import React, { PureComponent } from 'react'
import './style.scss'

import Image from '../Image'

class LinkGrid extends PureComponent {

	renderLinks() {
		const { links } = this.props;
		return links.map(link => {
			return (
				<a href={link.url} className="LinkGrid--item" key={link.url}>
					<Image
						image={link.image}
						className="LinkGrid--item__image"
						alt={link.alt}
						width={320}
					/>
				</a>
			)
		})
	}

	render() {
		return (
			<div className="LinkGrid">
				{this.renderLinks()}
			</div>
		)
	}
}

export default LinkGrid