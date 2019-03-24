import React from 'react'
import { Helmet } from 'react-helmet'

const DEFAULT_OG_IMAGE = require('../../assets/images/default_image.jpg')

const PageHOC = ({ className, children, pageTitle, metaDesc, ogImageUrl = DEFAULT_OG_IMAGE }) => {

	const canonicalUrl = 'https://' + window.location.hostname + window.location.pathname

	return (
		<div className={className}>
			<Helmet
				defaultTitle="Junction"
				titleTemplate="Junction | %s"
			>
				<link rel="canonical" href={canonicalUrl} />

				{pageTitle ? <title>{pageTitle}</title> : null}
				{pageTitle ? <meta property="og:title" content={pageTitle} /> : null}
				{metaDesc ? <meta name="description" content={metaDesc} /> : null}
				{metaDesc ? <meta property="og:description" content={metaDesc} /> : null}

				<meta property="og:image" content={ogImageUrl} />
				<meta property="og:url" content={canonicalUrl} />

				{/* TODO: Proper OG meta tags, twitter card stuff, */}
				{/* <meta property="og:site_name" content={'Junction'} /> */}

			</Helmet>
			{children}
		</div>
	)
}

export default PageHOC