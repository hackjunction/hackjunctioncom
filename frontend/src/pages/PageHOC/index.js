import React from 'react'
import { Helmet } from 'react-helmet'

const PageHOC = ({ className, children, pageTitle, metaDesc }) => {

	return (
		<div className={className}>
			<Helmet
				defaultTitle="Junction"
				titleTemplate="Junction | %s"
			>
				<title>{pageTitle}</title>
				{metaDesc ? <meta name="description" content={metaDesc} /> : null}
			</Helmet>
			{children}
		</div>
	)
}

export default PageHOC