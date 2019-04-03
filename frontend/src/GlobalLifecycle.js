import React from 'react';
import { connect } from 'react-redux';
import config from './services/config';

import { updateEventConcepts } from './redux/eventconcepts/actions';
import { eventconceptsShouldUpdate } from './redux/eventconcepts/selectors'

import { updateEvents } from './redux/events/actions';
import { eventsShouldUpdate } from './redux/events/selectors';

import { updateKpis } from './redux/kpis/actions';
import { kpisShouldUpdate } from './redux/kpis/selectors';

import { updatePages } from './redux/pages/actions';
import { pagesShouldUpdate } from './redux/pages/selectors'

import { updatePartners } from './redux/partners/actions';
import { partnersShouldUpdate } from './redux/partners/selectors';

import { updateSocialMedias } from './redux/socialmedias/actions';
import { socialMediasShouldUpdate } from './redux/socialmedias/selectors';

import { updateStaticContent } from './redux/staticcontent/actions';
import { contentShouldUpdate } from './redux/staticcontent/selectors';

import { updateStaticMedia } from './redux/staticmedia/actions';
import { mediaShouldUpdate } from './redux/staticmedia/selectors';

import { updateStories } from './redux/stories/actions';
import { storiesShouldUpdate } from './redux/stories/selectors';

import { updateTeamMembers } from './redux/teammembers/actions';
import { teammembersShouldUpdate } from './redux/teammembers/selectors';

import { updateTestimonials } from './redux/testimonials/actions';
import { testimonialsShouldUpdate } from './redux/testimonials/selectors';

/* A component with the same lifecycle as the app in general. Use this
  to e.g. dispatch any Redux actions that you want to dispatch on every page load (refresh).

  Remember to render this in App.js
*/

class GlobalLifecycle extends React.Component {
    componentDidMount() {
        if (config.IS_DEBUG) {
            console.log('DEBUG ENABLED:', config.IS_DEBUG);
            console.log('ENV:', process.env);
            console.log('CONFIG:', config);
        }

        this.updateImportant();

        setTimeout(function () {
            this.updateSecondary();
        }.bind(this), 500)
    }

    updateImportant() {
        if (this.props.staticContentShouldUpdate) {
            this.props.updateStaticContent();
        }

        if (this.props.staticMediaShouldUpdate) {
            this.props.updateStaticMedia();
        }

        if (this.props.eventConceptsShouldUpdate) {
            this.props.updateEventConcepts();
        }

        if (this.props.pagesShouldUpdate) {
            this.props.updatePages();
        }
    }

    updateSecondary() {

        if (this.props.eventsShouldUpdate) {
            this.props.updateEvents();
        }

        if (this.props.kpisShouldUpdate) {
            this.props.updateKpis();
        }

        if (this.props.partnersShouldUpdate) {
            this.props.updatePartners();
        }

        if (this.props.socialMediasShouldUpdate) {
            this.props.updateSocialMedia();
        }

        if (this.props.storiesShouldUpdate) {
            this.props.updateStories();
        }

        if (this.props.teamMembersShouldUpdate) {
            this.props.updateTeamMembers();
        }

        if (this.props.testimonialsShouldUpdate) {
            this.props.updateTestimonials();
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({
    staticContentShouldUpdate: contentShouldUpdate(state),
    staticMediaShouldUpdate: mediaShouldUpdate(state),
    eventConceptsShouldUpdate: eventconceptsShouldUpdate(state),
    eventsShouldUpdate: eventsShouldUpdate(state),
    kpisShouldUpdate: kpisShouldUpdate(state),
    pagesShouldUpdate: pagesShouldUpdate(state),
    partnersShouldUpdate: partnersShouldUpdate(state),
    socialMediasShouldUpdate: socialMediasShouldUpdate(state),
    storiesShouldUpdate: storiesShouldUpdate(state),
    teamMembersShouldUpdate: teammembersShouldUpdate(state),
    testimonialsShouldUpdate: testimonialsShouldUpdate(state),
});

const mapDispatchToProps = dispatch => ({
    updateStaticContent: () => dispatch(updateStaticContent()),
    updateStaticMedia: () => dispatch(updateStaticMedia()),
    updateEventConcepts: () => dispatch(updateEventConcepts()),
    updateEvents: () => dispatch(updateEvents()),
    updateKpis: () => dispatch(updateKpis()),
    updatePages: () => dispatch(updatePages()),
    updatePartners: () => dispatch(updatePartners()),
    updateSocialMedia: () => dispatch(updateSocialMedias()),
    updateStories: () => dispatch(updateStories()),
    updateTeamMembers: () => dispatch(updateTeamMembers()),
    updateTestimonials: () => dispatch(updateTestimonials()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalLifecycle);


