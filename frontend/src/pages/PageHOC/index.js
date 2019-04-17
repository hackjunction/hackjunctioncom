import React, { PureComponent } from 'react';
import './style.scss';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { connect } from 'react-redux';
import cloudinary from 'cloudinary-core';

import config from '../../services/config';

import * as NavActions from '../../redux/nav/actions';
import { content as selectContent } from '../../redux/staticcontent/selectors';
import { media as selectMedia } from '../../redux/staticmedia/selectors';

const cl = cloudinary.Cloudinary.new({ cloud_name: config.CLOUDINARY_CLOUD_NAME });

class PageHOC extends PureComponent {

    componentDidMount() {
        const { setNavTitle, pageTitle, toggleSidebar } = this.props;

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
        const { className, children, pageTitle, metaDesc, ogImageUrl, ogVideoUrl } = this.props;
        const canonicalUrl = 'https://' + window.location.hostname + window.location.pathname;

        return (
            <div className={'Page--wrapper ' + className}>
                <Helmet defaultTitle="Junction | Hack the Future" titleTemplate="Junction | %s">
                    <link rel="canonical" href={canonicalUrl} />
                    <meta property="og:url" content={canonicalUrl} />
                    <title>{pageTitle}</title>
                    <meta name="robots" content="index,follow" />
                    <meta name="description" content={metaDesc} />
                    <meta property="og:title" content={'Junction | ' + pageTitle} />
                    <meta property="og:description" content={metaDesc} />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content={ogImageUrl} />
                </Helmet>
                {children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const { pageTitleKey, metaDescKey, ogImageKey } = ownProps;
    const content = selectContent(state);
    const media = selectMedia(state);
    let ogImageUrl = ownProps.ogImageUrl;

    if (media[ogImageKey]) {
        ogImageUrl = cl.url(media[ogImageKey].public_id, { width: 1200, height: 630, crop: 'fill', gravity: 'center' });
    }

    return {
        pageTitle: content[pageTitleKey] || ownProps.pageTitle,
        metaDesc: content[metaDescKey] || ownProps.metaDesc,
        ogImageUrl,
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
