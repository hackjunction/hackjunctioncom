import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCookiesAccepted } from '../../redux/misc/actions';
import { isCookiesAccepted, isRehydrated } from '../../redux/misc/selectors';

class PrivacyBanner extends PureComponent {

	constructor(props) {
		super(props);
		this.handleAccept = this.handleAccept.bind(this);
	}

	handleAccept() {
		this.props.setAccepted();
	}

	render() {
		if (!this.props.rehydrated || this.props.accepted) {
			return null;
		}

		return (
			<div className="PrivacyBanner">
				<div className="PrivacyBanner--left">
					<p className="PrivacyBanner--text">
						We use cookies from external service providers in order to collect statistics about the usage of the site. This information is anonymized, and cannot be connected to individual users. See our <Link to="/policy">Privacy Policy</Link> and <Link to="/terms">Terms & Conditions</Link> for details on how we use your data.
					</p>
				</div>
				<div className="PrivacyBanner--right">
					<button className="PrivacyBanner--close" onClick={this.handleAccept}>OK</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	accepted: isCookiesAccepted(state),
	rehydrated: isRehydrated(state),
});

const mapDispatchToProps = dispatch => ({
	setAccepted: () => dispatch(setCookiesAccepted(true))
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyBanner)