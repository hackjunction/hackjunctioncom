import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import _ from 'lodash'

class NavStack extends Component {
	static propTypes = {
		navlink: PropTypes.object,
	}

	renderChildren() {
		const { children } = this.props.navlink

		if (children) {
			return _.map(children, (c, index) => {
				return (
					<a href={c.linkTo} className="NavStack_Item" style={{ '--n': index + 1, '--nout': children.length - index }}>
						{c.name}
					</a>
				)
			})
		}
	}

	render() {

		const { navlink } = this.props

		return (
			<div className="NavStack">
				<div className="NavStack_Top">
					{navlink.linkTo ?
						<a className="NavStack_Item" href={navlink.linkTo}>{navlink.name}</a> :
						<div className="NavStack_Item">{navlink.name}</div>
					}
				</div>
				<div className="NavStack_Items">
					{this.renderChildren()}
				</div>
			</div>
		)
	}
}

export default NavStack
