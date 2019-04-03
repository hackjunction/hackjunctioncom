import React, { useEffect } from 'react';
import './style.scss';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { connect } from 'react-redux';

import config from '../../services/config';

import * as NavActions from '../../redux/nav/actions';
import { content as selectContent } from '../../redux/staticcontent/selectors';

const PageHOC = ({ className, children, pageTitle, metaDesc, setNavTitle }) => {
    const canonicalUrl = 'https://' + window.location.hostname + window.location.pathname;

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

        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.pageView();
        }
    }, []);

    return (
        <div className={'Page--wrapper ' + className}>
            <Helmet defaultTitle="Junction" titleTemplate="Junction | %s">
                <link rel="canonical" href={canonicalUrl} />
                {config.IS_DEBUG ? <meta name="robots" content="noindex,nofollow" /> : null}
                {pageTitle ? <title>{pageTitle}</title> : <title>Hack the Future</title>}
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

const mapStateToProps = (state, ownProps) => {

    const { pageTitleKey, metaDescKey } = ownProps;
    const content = selectContent(state);

    return {
        pageTitle: content[pageTitleKey] || ownProps.pageTitle,
        metaDesc: content[metaDescKey] || ownProps.metaDesc
    }
}

const mapDispatchToProps = dispatch => ({
    setNavTitle: title => dispatch(NavActions.setNavTitle(title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHOC);
