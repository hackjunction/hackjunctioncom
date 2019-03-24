import React from 'react'
import { Helmet } from 'react-helmet'

const PageHOC = ({ className, children, pageTitle }) => {

	return (
		<div className={className}>
			<Helmet
				defaultTitle="Junction"
				titleTemplate="Junction | %s"
			>
				<title>{pageTitle}</title>
			</Helmet>
			{children}
		</div>
	)
}

export default PageHOC