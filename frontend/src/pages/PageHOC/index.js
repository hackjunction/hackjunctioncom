import React, { useEffect } from 'react';
import './style.scss';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';

import config from '../../services/config';

import * as NavActions from '../../redux/nav/actions';

const DEFAULT_OG_IMAGE = require('../../assets/images/default_image.jpg');

const PageHOC = ({ className, children, pageTitle, metaDesc, setNavTitle }) => {
    useEffect(() => {
        if (pageTitle) {
            setNavTitle(pageTitle);
        }
    }, [pageTitle]);

    /* Track pageView in Google Analytics on mount */
    useEffect(() => {
        if (config.GOOGLE_ANALYTICS_ID) {
            /* Make sure ReactGA is initialised in GlobalLifecycle.js */
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, []);

    const canonicalUrl = 'https://' + window.location.hostname + window.location.pathname;

    return (
        <div className={'Page--wrapper ' + className}>
            <Helmet defaultTitle="Junction" titleTemplate="Junction | %s">
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
    );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    setNavTitle: title => dispatch(NavActions.setNavTitle(title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHOC);
