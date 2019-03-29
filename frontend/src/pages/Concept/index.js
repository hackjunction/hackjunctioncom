import React, { useEffect } from 'react';
import './style.scss';
import { connect } from 'react-redux';

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

import * as ContentSelectors from '../../redux/content/selectors';
import * as ContentActions from '../../redux/content/actions';
import CenteredBlock from '../../components/CenteredBlock';

import { getConceptBySlug } from '../../redux/content/helpers';

const ConceptPage = React.memo(props => {
    const { match, loading, error, concepts } = props;

    const slug = match.params.slug;

    useEffect(() => {
        const { shouldUpdate, updateConcepts } = props;
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

    const concept = getConceptBySlug(concepts, slug);

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
                <Markdown source={concept.topSectionBody} />
            </BlockSection>
            <Divider lg />
            <CenteredBlock>
                <Markdown source={concept.longdescription} />
            </CenteredBlock>
            <EventCalendar concept={concept.slug} />
            <Divider lg />
        </Page>
    );
});

const mapStateToProps = state => ({
    concepts: ContentSelectors.eventconcepts(state),
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
