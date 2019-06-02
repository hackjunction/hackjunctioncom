import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import Divider from '../Divider';
import AnimateHeight from 'react-animate-height';

class FaqGridItem extends PureComponent {
	static propTypes = {
		question: PropTypes.string,
		answer: PropTypes.string,
		key: PropTypes.string,
	}

	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		}

		this.toggleExpanded = this.toggleExpanded.bind(this);
	}

	toggleExpanded() {
		this.setState({
			expanded: !this.state.expanded
		});
	}

	render() {
		const { question, answer } = this.props;
		const { expanded } = this.state;
		return (
			<div className={`FaqGridItem ${expanded ? 'FaqGridItem-expanded' : ''}`} onClick={this.toggleExpanded}>
				<span className="FaqGridItem--question">{question}<i className="icon-right-open" onClick={this.setNextMarker} /></span>
				<AnimateHeight
					duration={300}
					height={this.state.expanded ? 'auto' : 0}
				>
					<div style={{ height: '30px' }} />
					<span className="FaqGridItem--answer">{answer}</span>
				</AnimateHeight>
			</div>
		)
	}
}

export default FaqGridItem;