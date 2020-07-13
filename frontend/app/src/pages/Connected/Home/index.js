import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import Divider from "../../../components/Divider";

import SectionImage from "../../../components/SectionImage";
import Planet from "../../../components/Planet";
import { Grid } from "@material-ui/core";
import CenteredBlock from "../../../components/CenteredBlock";
import EventCalendar from "../../../components/EventCalendar";
import BlockSection from "../../../components/BlockSection";
import Timeline from "../Components/Timeline";

import { spacing } from "@material-ui/system";

import Page from "../../PageHOC";
import SmallButton from "../../../components/SmallButton";
const EventsMap = React.lazy(() => import("../../../components/EventsMap"));

const BOTTOM_LINKS = [
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/calendar",
        linkText: "Calendar",
    },
    {
        imageKey: MEDIA_KEYS.partnerPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/partners",
        linkText: "For partners",
    },
    {
        imageKey: MEDIA_KEYS.volunteerPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/volunteers",
        linkText: "For volunteers",
    },
];

const ConnectedHome = ({}) => {
    return (
        <Page
            className="Connected"
            pageTitle="Hack the Future"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.ConnectedHeaderImage}
        >
            <CenteredBlock>
                <Grid className="Connected--TopContent">
                    <img
                        className="Connected--logo"
                        src={require("../../../assets/logos/text_black.png")}
                        alt="connected-logo-here"
                    />
                    <h2 className="Connected-subtitle">6-8 November </h2>

                    <h3 className="Connected-subtitle">
                        A hackathon like no other, gathering people all over the
                        world to simultaneously hack in both physical locations
                        and online.
                    </h3>
                    <Divider sm />
                    <Grid spacing={6} direction="row">
                        <SmallButton
                            className="Connected-button"
                            to
                            text="Junction App"
                        />

                        <SmallButton
                            className="Connected-button"
                            to
                            text="Partner with us"
                        />
                    </Grid>
                    <Divider sm />
                </Grid>
            </CenteredBlock>
            <SectionImage
                imageKey={MEDIA_KEYS.ConnectedHeaderImage}
                alt="Header image"
            ></SectionImage>
            <div className="BlockSection">
                <div className="BlockSection--left">
                    <h3 className="BlockSection--left__title">
                        Introducing Hubs
                    </h3>
                    <p>
                        Junction 2020 Connected is a new take on the established
                        concept of a hackathon; participants all over the world
                        can join physical locations hosted by Junction and other
                        organizations, or participate in the event fully online.
                    </p>
                    <SmallButton
                        className="Connected-blue-button"
                        to
                        text="Learn more about Hubs"
                    />
                </div>
                <div className="BlockSection--right">
                    <img
                        className="Connected--logo"
                        src={require("../../../assets/images/photo-hub-visualisation.png")}
                        alt="connected-logo-here"
                    />
                </div>
            </div>
            <div className="BlockSection">
                <div className="BlockSection--left">
                    <img
                        className="Connected--logo"
                        src={require("../../../assets/images/connected-chain.png")}
                        alt="connected-logo-here"
                    />
                </div>

                <div className="BlockSection--right">
                    <h3 className="BlockSection--left__title">
                        30 countries, 1 hackathon
                    </h3>
                    <p>
                        The local hubs give the concept of a normal online
                        hackathon a twist by increasing the sense of community
                        and making physical interaction possible when needed.
                        Check out your nearest hub or organize one yourself!{" "}
                    </p>
                    <SmallButton
                        className="Connected-blue-button"
                        to
                        text="Learn more about Hubs"
                    />
                </div>
            </div>
            <div className="BlockSection Seperated">
                <div className="BlockSection--left">
                    <h3 className="BlockSection--left__title">Timeline</h3>
                </div>
                <div className="BlockSection--right">
                    <Timeline>September 1st Application period begins</Timeline>
                    <Timeline> October 6th Virtual matchmaking begins</Timeline>
                    <Timeline>September 1st Application period begins</Timeline>
                    <Timeline last>
                        November 6th to 8th Junction 2020 Connected
                    </Timeline>
                </div>
            </div>
        </Page>
    );
};

export default ConnectedHome;
