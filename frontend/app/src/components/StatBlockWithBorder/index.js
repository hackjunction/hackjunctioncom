import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class StatBlockWithBorder extends PureComponent {

	static propTypes = {
		title: PropTypes.string,
		value: PropTypes.string,
		subtitle: PropTypes.string,
	}

	render() {
		const { title, value, subtitle } = this.props;

		return (
			<div className="StatBlockWithBorder">
				<div className="StatBlockWithBorder--border__left" />
				<p className="StatBlockWithBorder--title">{title}</p>
				<p className="StatBlockWithBorder--value">{value}</p>
				<p className="StatBlockWithBorder--subtitle">{subtitle}</p>
				<div className="StatBlockWithBorder--border__right" />
			</div>
		)
	}
}

export default StatBlockWithBorder;