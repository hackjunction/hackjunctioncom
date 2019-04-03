import React from 'react';
import { connect } from 'react-redux';
import ReactPixel from 'react-facebook-pixel';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';
import config from './services/config';

import * as ContentActions from './redux/content/actions';
import * as ContentSelectors from './redux/content/selectors';
import * as StaticContentActions from './redux/static/actions';
import * as StaticContentSelectors from './redux/static/selectors';
import * as MediaActions from './redux/media/actions';
import * as MediaSelectors from './redux/media/selectors';

/* A component with the same lifecycle as the app in general. Use this
  to e.g. dispatch any Redux actions that you want to dispatch on every page load.

  Also renders any dynamic changes to the HTML <head/> with react-helmet

  Also initalizes any 3rd party services, such as Google Analytics etc.

  Remember to render this in App.js
*/

class GlobalLifecycle extends React.Component {
    componentDidMount() {
        if (config.IS_DEBUG) {
            console.log('DEBUG ENABLED:', config.IS_DEBUG);
            console.log('ENV:', process.env);
            console.log('CONFIG:', config);
        }

        /* Update various globally needed content from the API */

        if (this.props.pagesShouldUpdate) {
            this.props.updatePages();
        }

        if (this.props.staticContentShouldUpdate) {
            this.props.updateStaticContent();
        }

        if (this.props.eventConceptsShouldUpdate) {
            this.props.updateEventConcepts();
        }

        if (this.props.mediaShouldUpdate) {
            this.props.updateMedia();
        }

        if (this.props.socialMediasShouldUpdate) {
            this.props.updateSocialMedias();
        }

        if (this.props.kpisShouldUpdate) {
            this.props.updateKpis();
        }

        if (this.props.partnersShouldUpdate) {
            this.props.updatePartners();
        }

        if (this.props.storiesShouldUpdate) {
            this.props.updateStories();
        }

        /* Initialize 3rd party analytics services if config for them is present */

        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.init(config.FACEBOOK_PIXEL_ID, {}, { autoConfig: true, debug: false });
            ReactPixel.pageView();
        } else {
            if (config.IS_DEBUG) {
                console.log('DEBUG: config variable FACEBOOK_PIXEL_ID undefined, not initializing FB pixel analytics');
            }
        }

        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
        } else {
            if (config.IS_DEBUG) {
                console.log('DEBUG: config variable GOOGLE_ANALYTICS_ID undefined, not initializing GA analytics');
            }
        }

        // if (config.HOTJAR_ID && config.HOTJAR_SV) {
        //     hotjar.initialize(config.HOTJAR_ID, config.HOTJAR_SV);
        // } else {
        //     if (config.IS_DEBUG) {
        //         console.log(
        //             'DEBUG: config variable HOTJAR_ID or HOTJAR_SV undefined, not initializing Hotjar analytics'
        //         );
        //     }
        // }
    }

    render() {
        // Return sitewide react-helmet configuration ("default"). You can override/make additions per-page in the PageHOC component.
        return (
            <Helmet titleTemplate="Junction | %s">
                {/* Default page title -> Junction | Hack the Future */}
                <title>Hack the Future</title>
                {/* Stop engines from crawling any non-public urls where the app is deployed */}
                {config.IS_DEBUG ? <meta name="robots" content="noindex,nofollow" /> : null}

            </Helmet>
        );
    }
}

const mapStateToProps = state => ({
    staticContentShouldUpdate: StaticContentSelectors.contentShouldUpdate(state),
    eventConceptsShouldUpdate: ContentSelectors.eventconceptsShouldUpdate(state),
    mediaShouldUpdate: MediaSelectors.mediaShouldUpdate(state),
    socialMediasShouldUpdate: ContentSelectors.socialMediasShouldUpdate(state),
    kpisShouldUpdate: ContentSelectors.kpisShouldUpdate(state),
    pagesShouldUpdate: ContentSelectors.pagesShouldUpdate(state),
    storiesShouldUpdate: ContentSelectors.storiesShouldUpdate(state),
    partnersShouldUpdate: ContentSelectors.partnersShouldUpdate(state),
});
const mapDispatchToProps = dispatch => ({
    updateStaticContent: () => dispatch(StaticContentActions.updateStaticContent()),
    updateEventConcepts: () => dispatch(ContentActions.updateEventConcepts()),
    updateMedia: () => dispatch(MediaActions.updateMedia()),
    updateSocialMedias: () => dispatch(ContentActions.updateSocialMedias()),
    updateKpis: () => dispatch(ContentActions.updateKpis()),
    updatePages: () => dispatch(ContentActions.updatePages()),
    updatePartners: () => dispatch(ContentActions.updatePartners()),
    updateStories: () => dispatch(ContentActions.updateStories())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalLifecycle);
