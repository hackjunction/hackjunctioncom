import React from 'react'
import './style.scss'

import { connect } from 'react-redux';
import _ from 'lodash';
import { partners } from '../../redux/partners/selectors';
import LinkGrid from './index.js';

const PartnerLogoGrid = ({ partners }) => {

	const items = _.map(partners, p => {
		return {
			image: p.logo,
			url: p.website,
			alt: p.name,
		}
	})

	return (
		<LinkGrid links={items} />
	)
}

const mapStateToProps = (state) => ({
	partners: partners(state)
})

export default connect(mapStateToProps)(PartnerLogoGrid)