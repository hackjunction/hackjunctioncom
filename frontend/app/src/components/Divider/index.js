import React from 'react'
import './style.scss'

const Divider = ({ sm = false, md = false, lg = false }) => {
	return (
		<div className={`Divider ${sm ? 'Divider-sm' : ''}${md ? 'Divider-md' : ''}${lg ? 'Divider-lg' : ''}`} />
	)
}

export default Divider