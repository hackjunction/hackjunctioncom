import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga';
import config from '../../services/config'

const DEFAULT_OG_IMAGE = require('../../assets/images/default_image.jpg')

const PageHOC = ({ className, children, pageTitle, metaDesc, ogImageUrl = DEFAULT_OG_IMAGE }) => {

	/* Track pageView in Google Analytics on mount */
	useEffect(() => {
		if (config.GOOGLE_ANALYTICS_ID) {
			/* Make sure ReactGA is initialised in GlobalLifecycle.js */
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
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

				{/* TODO: Proper OG meta tags, twitter card stuff, etc. */}
				{/* <meta property="og:site_name" content={'Junction'} /> */}
				{/* <meta property="og:image" content={ogImageUrl} />
				<meta property="og:url" content={canonicalUrl} /> */}

			</Helmet>
			{children}
		</div>
	)
}

export default PageHOC