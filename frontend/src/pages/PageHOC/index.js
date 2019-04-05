import React, { PureComponent } from 'react';
import './style.scss';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { connect } from 'react-redux';

import config from '../../services/config';

import * as NavActions from '../../redux/nav/actions';
import { content as selectContent } from '../../redux/staticcontent/selectors';

class PageHOC extends PureComponent {

    componentDidMount() {
        const { setNavTitle, pageTitle, toggleSidebar } = this.props;

        if (config.GOOGLE_ANALYTICS_ID) {
            /* Make sure ReactGA is initialised in GlobalLifecycle.js */
            ReactGA.pageview(window.location.pathname + window.location.search);
        }

        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.pageView();
        }

        toggleSidebar(false);
        setNavTitle(pageTitle)
    }

    componentDidUpdate(prevProps) {
        const { setNavTitle, toggleSidebar, pageTitle } = this.props;

        if (prevProps.pageTitle !== pageTitle) {
            setNavTitle(pageTitle);
            toggleSidebar(false);
        }
    }

    render() {
        const { className, children, pageTitle, metaDesc } = this.props;
        const canonicalUrl = 'https://' + window.location.hostname + window.location.pathname;

        return (
            <div className={'Page--wrapper ' + className}>
                <Helmet defaultTitle="Junction | Hack the Future" titleTemplate="Junction | %s">
                    <link rel="canonical" href={canonicalUrl} />
                    <link rel="preconnect" href={config.API_BASE_URL} />
                    {config.IS_DEBUG ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index,follow" />}
                    <title>{pageTitle}</title>
                    <meta name="description" content={metaDesc} />
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:description" content={metaDesc} />
                </Helmet>
                {children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const { pageTitleKey, metaDescKey } = ownProps;
    const content = selectContent(state);

    return {
        pageTitle: content[pageTitleKey] || ownProps.pageTitle,
        metaDesc: content[metaDescKey] || ownProps.metaDesc
    }
}

const mapDispatchToProps = dispatch => ({
    setNavTitle: title => dispatch(NavActions.setNavTitle(title)),
    toggleSidebar: open => dispatch(NavActions.toggleSidebar(open)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHOC);
