import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import HeaderImage from "../../../components/HeaderImage";
import BasicHeader from "../../../components/HeaderImage/BasicHeader";
import BlockSection from "../../../components/BlockSection";
import Divider from "../../../components/Divider";
import NewsLetterForm from "../../../components/NewsLetterForm";
import Markdown from "../../../components/Markdown";
import Page from "../../PageHOC";
import LoadingPage from "../../Loading";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import {
    eventconceptsByPriority,
    eventconceptsLoading,
} from "../../../redux/eventconcepts/selectors";

const EventsMap = React.lazy(() => import("../../../components/EventsMap"));

class ConceptsPage extends PureComponent {
    renderConcepts(eventconcepts) {
        if (!Array.isArray(eventconcepts) || eventconcepts.length === 0) {
            return null;
        }

        return eventconcepts.map((concept) => {
            return (
                <React.Fragment key={concept.slug}>
                    <BlockSection title={concept.name} subtitle={""}>
                        <Markdown source={concept.shortdescription} />
                        <Link
                            className="ConceptsPage--see-more-link"
                            to={`/concepts/${concept.slug}`}
                        >
                            See more
                        </Link>
                    </BlockSection>
                    <Divider md />
                </React.Fragment>
            );
        });
    }

    render() {
        const { eventconcepts, loading } = this.props;

        if (loading) {
            return <LoadingPage />;
        }

        return (
            <Page
                className="ConceptsPage"
                pageTitle="Concepts"
                metaDescKey={KEYS.conceptsPageSubtitle}
                ogImageKey={MEDIA_KEYS.conceptsPageHeaderImage}
            >
                <HeaderImage
                    imageKey={MEDIA_KEYS.conceptsPageHeaderImage}
                    alt="Header image"
                >
                    <BasicHeader
                        titleKey={KEYS.conceptsPageTitle}
                        bodyKey={KEYS.conceptsPageSubtitle}
                    />
                </HeaderImage>
                <Divider lg />
                {this.renderConcepts(eventconcepts)}
                <Divider lg />
                <Suspense fallback={null}>
                    <EventsMap />
                </Suspense>
                <Divider lg />
                <NewsLetterForm />
                <Divider lg />
            </Page>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: eventconceptsLoading(state),
    eventconcepts: eventconceptsByPriority(state),
});

export default connect(mapStateToProps)(ConceptsPage);
