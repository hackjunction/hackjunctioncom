import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';

import LoadingPage from '../Loading';
import ErrorPage from '../Error';
import NotFoundPage from '../NotFound';

import HeaderImage from '../../components/HeaderImage';
import EventCalendar from '../../components/EventCalendar';
import Divider from '../../components/Divider';
import Markdown from '../../components/Markdown';

import Page from '../PageHOC';

import * as ContentSelectors from '../../redux/content/selectors';
import * as ContentActions from '../../redux/content/actions';
import CenteredBlock from '../../components/CenteredBlock';

const ConceptPage = ({ match, shouldUpdate, updateConcepts, loading, error, getConcept }) => {
    const slug = match.params.slug;

    useEffect(() => {
        if (shouldUpdate) {
            updateConcepts();
        }
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    if (error) {
        return <ErrorPage />;
    }

    const concept = getConcept(slug);

    if (!concept) {
        return <NotFoundPage />;
    }

    return (
        <Page className="ConceptPage" pageTitle={concept.name} metaDesc={concept.shortDescription}>
            <HeaderImage
                image={concept.image}
                alt="Header image"
                navTitle={concept.name}
                mainTitle={concept.punchline}
                bodyText={concept.shortdescription}
            />
            <CenteredBlock>
                <Markdown source={concept.longdescription} />
            </CenteredBlock>
            <EventCalendar concept={concept.slug} />
            <Divider lg />
        </Page>
    );
};

const mapStateToProps = state => ({
    getConcept: slug => ContentSelectors.eventconceptBySlug(slug)(state),
    loading: ContentSelectors.eventconceptsLoading(state),
    error: ContentSelectors.eventconceptsError(state),
    shouldUpdate: ContentSelectors.eventconceptsShouldUpdate(state)
});

const mapDispatchToProps = dispatch => ({
    updateConcepts: () => dispatch(ContentActions.updateEventConcepts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConceptPage);
