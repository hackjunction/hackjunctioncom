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
import { spacing } from "@material-ui/system";

import Page from "../../PageHOC";
import LinkButton from "../../../components/LinkButton/index";
import Button from "../../../components/Button";
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
            <Planet />
            <SectionImage
                imageKey={MEDIA_KEYS.ConnectedHackingImage}
                alt="People attending a hackathon"
            ></SectionImage>
            <h1>Upcoming events</h1>
            <EventCalendar />
            <SectionImage
                imageKey={MEDIA_KEYS.ConnectedCommunityImage}
                alt="Junction Community"
            ></SectionImage>
        </Page>
    );
};

export default ConnectedHome;
