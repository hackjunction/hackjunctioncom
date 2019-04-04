import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import config from './services/config';

import { updateEventConcepts } from './redux/eventconcepts/actions';
import { updatePages } from './redux/pages/actions';
import { updateStaticContent } from './redux/staticcontent/actions';
import { updateStaticMedia } from './redux/staticmedia/actions';
import { updateTestimonials } from './redux/testimonials/actions';
import { toggleSidebar } from './redux/nav/actions';

/* A component with the same lifecycle as the app in general. Use this
  to e.g. dispatch any Redux actions that you want to dispatch on every page load (refresh).

  Remember to render this in App.js
*/

class GlobalLifecycle extends React.Component {
    async componentDidMount() {
        if (config.IS_DEBUG) {
            console.log('DEBUG ENABLED:', config.IS_DEBUG);
            console.log('ENV:', process.env);
            console.log('CONFIG:', config);
        }

        /** Dispatch updates that affect the whole page */
        this.props.updateStaticContent();
        this.props.updateStaticMedia();
        this.props.updateEventConcepts();
        this.props.updatePages();
        this.props.updateTestimonials();
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    updateStaticContent: () => dispatch(updateStaticContent()),
    updateStaticMedia: () => dispatch(updateStaticMedia()),
    updateEventConcepts: () => dispatch(updateEventConcepts()),
    updatePages: () => dispatch(updatePages()),
    updateTestimonials: () => dispatch(updateTestimonials()),
    toggleSidebar: (open) => dispatch(toggleSidebar(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GlobalLifecycle));


