import React, { PureComponent } from 'react';
import './style.scss';

import StatBlock from '../StatBlock';
import CountdownNow from 'react-countdown-now';


class Countdown extends PureComponent {

	constructor(props) {
		super(props);

		this.renderCountdown = this.renderCountdown.bind(this);
		this.renderComplete = this.renderComplete.bind(this);
	}

	renderComplete() {
		return null;
	}

	renderCountdown({ days, hours, minutes, seconds, completed }) {
		if (completed) {
			// Render a completed state
			return this.renderComplete();
		} else {
			return (
				<div className="Countdown">
					<StatBlock
						value={days}
						label="days"
					/>
					<StatBlock
						value={hours}
						label="hours"
					/>
					<StatBlock
						value={minutes}
						label="minutes"
					/>
					<StatBlock
						value={seconds}
						label="seconds"
					/>
				</div>
			);
		}
	}

	render() {
		return (
			<CountdownNow
				date={this.props.to}
				renderer={this.renderCountdown}
			/>
		)
	}
}

export default Countdown;