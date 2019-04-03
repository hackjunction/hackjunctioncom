import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';
import _ from 'lodash';

import LoadingPage from '../Loading';
import ErrorPage from '../Error';
import NotFoundPage from '../NotFound';

import HeaderImage from '../../components/HeaderImage';
import LogoHeader from '../../components/HeaderImage/LogoHeader';
import EventCalendar from '../../components/EventCalendar';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';
import BlockSection from '../../components/BlockSection';

import Page from '../PageHOC';

import CenteredBlock from '../../components/CenteredBlock';

import {
    eventconcepts,
    eventconceptsLoading,
    eventconceptsError,
} from '../../redux/eventconcepts/selectors';

const ConceptPage = ({ loading, error, concept }) => {

    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        return <ErrorPage />;
    }

    if (!concept) {
        return <NotFoundPage />;
    }

    return (
        <Page className="ConceptPage" pageTitle={concept.name} metaDesc={concept.shortDescription}>
            <HeaderImage
                image={concept.image}
                alt="Header image"
                mainTitle={concept.punchline}
                bodyText={concept.shortdescription}
            >
                <LogoHeader
                    logo={concept.logo}
                    punchline={concept.punchline}
                    link={concept.website}
                    linkText={'Event website'}
                />
            </HeaderImage>
            <BlockSection title={concept.topSectionTitle} subtitle={concept.topSectionSubtitle}>
                {concept.topSectionBody ? <Markdown source={concept.topSectionBody} /> : null}
            </BlockSection>
            <Divider lg />
            <CenteredBlock>
                <Markdown source={concept.longdescription} />
            </CenteredBlock>
            <Divider lg />
            <EventCalendar title={`Upcoming ${concept.name} events`} concept={concept.slug} />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    const concepts = eventconcepts(state)

    return {
        concept: _.find(concepts, c => c.slug === match.params.slug),
        loading: eventconceptsLoading(state),
        error: eventconceptsError(state),
    }
}

export default connect(
    mapStateToProps
)(ConceptPage);
