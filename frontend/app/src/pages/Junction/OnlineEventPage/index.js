import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { find } from "lodash-es";
import moment from "moment";
import "./style.scss";

import LoadingPage from "../../Loading";
import ErrorPage from "../../Error";
import NotFoundPage from "../../Connected/NotFound";
import Page from "../../PageHOC";

import HeaderImage from "../../../components/HeaderImage";
import LogoHeader from "../../../components/HeaderImage/LogoHeader";
import BlockSection from "../../../components/BlockSection";
import Markdown from "../../../components/Markdown";
import PartnerLogoGrid from "../../../components/LinkGrid/PartnerLogoGrid";
import Divider from "../../../components/Divider";
import SingleColumnSection from "../../../components/SingleColumnSection";
import FaqGrid from "../../../components/FaqGrid";
import ImageLinks from "../../../components/ImageLinks";
import StatBlockWithBorder from "../../../components/StatBlockWithBorder";
import Countdown from "../../../components/Countdown";
import StatBlock from "../../../components/StatBlock";

import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import {
    onlineEvents,
    onlineEventsLoading,
    onlineEventsError,
} from "../../../redux/onlineevents/selectors";

class OnlineEventPage extends PureComponent {
    renderChallenges() {
        const { event } = this.props;

        if (Array.isArray(event.challenges) && event.challenges.length > 0) {
            return (
                <BlockSection title="Themes">
                    {event.challenges.map((c) => {
                        return (
                            <a href={c.link}>
                                <div
                                    key={c.name}
                                    className="OnlineEvent--Challenge"
                                >
                                    <span className="OnlineEvent--Challenge__name">
                                        {c.name}
                                    </span>
                                    <span className="OnlineEvent--Challenge__desc">
                                        {c.shortDescription}
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                    <Divider lg />
                </BlockSection>
            );
        }
        return null;
    }

    render() {
        const { loading, error, event } = this.props;

        if (loading) {
            return <LoadingPage />;
        }

        if (error) {
            return <ErrorPage />;
        }

        if (!event) {
            return <NotFoundPage />;
        }

        return (
            <Page
                pageTitle={event.navTitle || event.name}
                metaDesc={event.punchline}
                ogImageUrl={event.headerImage ? event.headerImage.url : null}
            >
                <HeaderImage image={event.headerImage} alt="Header image">
                    <LogoHeader
                        logo={event.logo}
                        punchline={event.punchline}
                        link={event.linkToEventSite}
                        linkText={"Join"}
                    />
                </HeaderImage>
                <BlockSection
                    title={event.topSectionTitle}
                    subtitle={event.topSectionSubtitle}
                >
                    <Markdown source={event.topSectionBody} />
                </BlockSection>
                <Divider lg />
                <SingleColumnSection center>
                    <img
                        src={require("../../../assets/images/online-circles-2.png")}
                        className="OnlineEvent--divider-img"
                        alt="art"
                    />
                </SingleColumnSection>
                <Divider lg />
                <Countdown
                    items={[
                        {
                            date: event.begins,
                            render: ({
                                days,
                                hours,
                                minutes,
                                seconds,
                                completed,
                            }) => {
                                if (completed) return null;
                                return (
                                    <SingleColumnSection
                                        title={event.name + " begins in"}
                                        center
                                    >
                                        <div className="OnlineEvent--countdown">
                                            <StatBlock
                                                value={days}
                                                label="days"
                                            />
                                            <StatBlock
                                                value={hours}
                                                label="hours"
                                            />
                                            <StatBlock
                                                value={minutes}
                                                label="minutes"
                                            />
                                            <StatBlock
                                                value={seconds}
                                                label="seconds"
                                            />
                                        </div>
                                        <Divider md />
                                        <h2>Ready to join?</h2>
                                        <a
                                            className="OnlineEvent--link"
                                            href={event.linkToEventSite}
                                        >
                                            Count me in
                                        </a>
                                        <a
                                            className="OnlineEvent--link"
                                            href={event.linkToDiscussion}
                                        >
                                            Join Slack
                                        </a>
                                    </SingleColumnSection>
                                );
                            },
                        },
                        {
                            date: event.ends,
                            render: ({
                                days,
                                hours,
                                minutes,
                                seconds,
                                completed,
                            }) => {
                                if (completed) return null;
                                return (
                                    <SingleColumnSection
                                        title={event.name + " ends in"}
                                        center
                                    >
                                        <div className="OnlineEvent--countdown">
                                            <StatBlock
                                                value={days}
                                                label="days"
                                            />
                                            <StatBlock
                                                value={hours}
                                                label="hours"
                                            />
                                            <StatBlock
                                                value={minutes}
                                                label="minutes"
                                            />
                                            <StatBlock
                                                value={seconds}
                                                label="seconds"
                                            />
                                        </div>
                                        <Divider md />
                                        <h2>Ready to join?</h2>
                                        <a
                                            className="OnlineEvent--link"
                                            href={event.linkToEventSite}
                                        >
                                            Count me in
                                        </a>
                                        <a
                                            className="OnlineEvent--link"
                                            href={event.linkToDiscussion}
                                        >
                                            Join Slack
                                        </a>
                                    </SingleColumnSection>
                                );
                            },
                        },
                    ]}
                    renderDone={() => (
                        <SingleColumnSection title={event.name + " has ended"}>
                            <p style={{ textAlign: "center" }}>
                                But don't worry, we run online events all the
                                time. Check them out{" "}
                                <a href="/concepts/junction-online">here</a>
                            </p>
                        </SingleColumnSection>
                    )}
                />
                <Divider lg />
                <SingleColumnSection center>
                    <StatBlockWithBorder
                        title="Main Prize"
                        value={event.prizesTotal}
                        subtitle="euros"
                    />
                </SingleColumnSection>
                <Divider lg />
                {this.renderChallenges()}
                <SingleColumnSection title="Supporting Partners">
                    <PartnerLogoGrid
                        partners={event.partners}
                        itemsPerRow={3}
                    />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection
                    title="FAQ"
                    subtitle="Frequently asked questions"
                >
                    <Divider sm />
                    <FaqGrid items={event.faq} />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection center>
                    <a
                        className="OnlineEvent--link"
                        href={event.linkToEventSite}
                    >
                        Join the hackathon
                    </a>
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection center>
                    <img
                        src={require("../../../assets/images/online-circles-3.png")}
                        className="OnlineEvent--divider-img"
                        alt="art"
                    />
                </SingleColumnSection>
                <Divider lg />
                <BlockSection
                    title={event.bottomSectionTitle}
                    subtitle={event.bottomSectionSubtitle}
                >
                    <Markdown source={event.bottomSectionBody} />
                </BlockSection>
                <Divider lg />
                <ImageLinks
                    links={[
                        {
                            imageKey: MEDIA_KEYS.calendarPageHeaderImage,
                            imageAlt: "Link",
                            linkTo: "/calendar",
                            linkText: "Calendar",
                        },
                        {
                            imageKey: MEDIA_KEYS.conceptsPageHeaderImage,
                            imageAlt: "Link",
                            linkTo: "/concepts/junction",
                            linkText: "Junction 2019",
                        },
                        {
                            imageKey: MEDIA_KEYS.storyPageHeaderImage,
                            imageAlt: "Link",
                            linkTo: "/story",
                            linkText: "Junction Story",
                        },
                    ]}
                />
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    const events = onlineEvents(state);

    return {
        event: find(events, (e) => e.slug === match.params.slug),
        loading: onlineEventsLoading(state),
        error: onlineEventsError(state),
    };
};

export default connect(mapStateToProps)(OnlineEventPage);
