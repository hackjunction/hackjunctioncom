import React, { useEffect } from 'react'
import './style.scss'

import { connect } from 'react-redux';
import { map } from 'lodash-es';
import { partners } from '../../redux/partners/selectors';
import { updatePartners } from '../../redux/partners/actions';
import LinkGrid from './index.js';

const PartnerLogoGrid = ({ partners, updatePartners }) => {

	useEffect(() => {
		updatePartners();
	}, [])

	const items = map(partners, p => {
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

const mapDispatchToProps = (dispatch) => ({
	updatePartners: () => dispatch(updatePartners())
})

export default connect(mapStateToProps, mapDispatchToProps)(PartnerLogoGrid)