import React from 'react';
import { connect } from 'react-redux';

import { updateEventConcepts } from './redux/eventconcepts/actions';
import { updatePages } from './redux/pages/actions';
import { updateStaticContent } from './redux/staticcontent/actions';
import { updateFAQ } from './redux/faq/actions';
import { updateStaticMedia } from './redux/staticmedia/actions';
import { updateTestimonials } from './redux/testimonials/actions';
import { updateOnlineEvents } from './redux/onlineevents/actions';
import { toggleSidebar } from './redux/nav/actions';


/* A component with the same lifecycle as the app in general. Use this
  to e.g. dispatch any Redux actions that you want to dispatch on every page load (refresh).

  Remember to render this in App.js
*/

class GlobalLifecycle extends React.Component {
    async componentDidMount() {
        /** Dispatch updates that affect the whole page */
        this.props.updateStaticContent();
        this.props.updateFAQ();
        this.props.updateStaticMedia();
        this.props.updateEventConcepts();
        this.props.updatePages();
        this.props.updateTestimonials();
        this.props.updateOnlineEvents();
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    updateStaticContent: () => dispatch(updateStaticContent()),
    updateFAQ: () => dispatch(updateFAQ()),
    updateStaticMedia: () => dispatch(updateStaticMedia()),
    updateEventConcepts: () => dispatch(updateEventConcepts()),
    updatePages: () => dispatch(updatePages()),
    updateTestimonials: () => dispatch(updateTestimonials()),
    updateOnlineEvents: () => dispatch(updateOnlineEvents()),
    toggleSidebar: (open) => dispatch(toggleSidebar(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalLifecycle);


