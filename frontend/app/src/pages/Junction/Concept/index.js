import React, { PureComponent } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { find } from "lodash-es";

import LoadingPage from "../../Loading";
import ErrorPage from "../../Error";
import NotFoundPage from "../../Connected/NotFound";

import HeaderImage from "../../../components/HeaderImage";
import LogoHeader from "../../../components/HeaderImage/LogoHeader";
import EventCalendar from "../../../components/EventCalendar";
import Divider from "../../../components/Divider";
import Markdown from "../../../components/Markdown";
import BlockSection from "../../../components/BlockSection";
import SingleColumnSection from "../../../components/SingleColumnSection";
import PartnerLogoGrid from "../../../components/LinkGrid/PartnerLogoGrid";

import Page from "../../PageHOC";

import CenteredBlock from "../../../components/CenteredBlock";

import {
    eventconcepts,
    eventconceptsLoading,
    eventconceptsError,
} from "../../../redux/eventconcepts/selectors";
import { showcasedPartners } from "../../../redux/partners/selectors";
import { upcomingEvents } from "../../../redux/events/selectors";
import SpecialEventCalendar from "../../../components/SpecialEventCalendar";

class ConceptPage extends PureComponent {
    renderOrganiserPartners() {
        const { concept } = this.props;
        const { organiserPartners } = concept;

        if (!Array.isArray(organiserPartners) || organiserPartners.length === 0)
            return null;
        return (
            <>
                <Divider sm />
                <SingleColumnSection title="Organized together with">
                    <PartnerLogoGrid
                        partners={concept.organiserPartners}
                        itemsPerRow={2}
                    />
                </SingleColumnSection>
            </>
        );
    }

    renderLocalPartners() {
        const { concept } = this.props;
        const { localPartners } = concept;
        if (!Array.isArray(localPartners) || localPartners.length === 0)
            return null;
        return (
            <>
                <Divider sm />
                <SingleColumnSection title="Local partners">
                    <PartnerLogoGrid
                        partners={concept.localPartners}
                        itemsPerRow={4}
                    />
                </SingleColumnSection>
            </>
        );
    }

    render() {
        const { loading, error, concept } = this.props;

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
            <Page
                className="ConceptPage"
                pageTitle={concept.name}
                metaDesc={concept.shortdescription}
                ogImageUrl={concept.image.url}
            >
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
                        linkText={"Event website"}
                    />
                </HeaderImage>
                <BlockSection
                    title={concept.topSectionTitle}
                    subtitle={concept.topSectionSubtitle}
                >
                    {concept.topSectionBody ? (
                        <Markdown source={concept.topSectionBody} />
                    ) : null}
                </BlockSection>
                <Divider lg />
                {concept.longdescription ? (
                    <CenteredBlock>
                        <Markdown source={concept.longdescription} />
                    </CenteredBlock>
                ) : null}
                {concept.longdescription ? <Divider lg /> : null}
                {concept.showSpecialCalendar ? (
                    <SpecialEventCalendar
                        title={"Upcoming " + concept.name + " events"}
                        events={this.props.events}
                    />
                ) : (
                    <EventCalendar
                        title={`Upcoming events`}
                        concept={concept.slug}
                        hideOnEmpty={true}
                    />
                )}
                {this.renderOrganiserPartners()}
                {this.renderLocalPartners()}
                <Divider lg />
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    const concepts = eventconcepts(state);

    return {
        concept: find(concepts, (c) => c.slug === match.params.slug),
        events: upcomingEvents(state).filter(
            (event) =>
                event.eventconcept &&
                event.eventconcept.slug === match.params.slug,
        ),
        loading: eventconceptsLoading(state),
        error: eventconceptsError(state),
        partners: showcasedPartners(state),
    };
};

export default connect(mapStateToProps)(ConceptPage);
