import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import FaqGridItem from './FaqGridItem';

class FaqGrid extends PureComponent {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.shape({
			question: PropTypes.string,
			answer: PropTypes.string,
			key: PropTypes.string,
		}))
	}

	static defaultProps = {
		items: []
	}

	renderItems() {
		const { items } = this.props;
		return items.map(item => (
			<FaqGridItem {...item} />
		))
	}

	render() {
		return (
			<div className="FaqGrid">
				{this.renderItems()}
			</div>
		)
	}
}

export default FaqGrid;