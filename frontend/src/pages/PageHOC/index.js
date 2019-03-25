import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga';
import config from '../../services/config'

if (config.GOOGLE_ANALYTICS_ID) {
	ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
} else {
	console.log('DEBUG: config variable GOOGLE_ANALYTICS_ID undefined, not initializing GA tracking')
}


const DEFAULT_OG_IMAGE = require('../../assets/images/default_image.jpg')

const PageHOC = ({ className, children, pageTitle, metaDesc, ogImageUrl = DEFAULT_OG_IMAGE }) => {

	/* Track pageView in Google Analytics on mount */
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, [])

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