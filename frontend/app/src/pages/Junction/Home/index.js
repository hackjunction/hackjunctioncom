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
import SmallButton from "../../../components/SmallButton";
import HeaderSection from "../../../components/HeaderSection";

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

class HomePage extends PureComponent {
    render() {
        return (
            <Page
                className="Junction-Default"
                pageTitle="Hack the Future"
                metaDescKey={KEYS.whoAreWeBody}
                ogImageKey={MEDIA_KEYS.homePageHeaderImage}
            >
                <HeaderSection
                    body=" We organize epic hackathons and other tech events -
                        around the world, around the year."
                    logo={require("../../../assets/logos/text_black.png")}
                >
                    <SmallButton className="Default-button" text="Read More" />
                    <Divider sm />
                    <Grid spacing={12} direction="row">
                        <SmallButton
                            className="Default-button-small"
                            to
                            text="Junction App"
                        />

                        <SmallButton
                            className="Default-button-small"
                            to
                            text="Organize a hackathon"
                        />

                        <SmallButton
                            className="Default-button-small"
                            to
                            text="Junction 2020 Connected"
                        />
                    </Grid>
                </HeaderSection>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                ></SectionImage>
                <div className="leave-margin">
                    <Planet />
                </div>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHackingImage}
                    alt="People attending a hackathon"
                ></SectionImage>
                <div className="leave-margin">
                    <h1>Upcoming events</h1>
                    <EventCalendar />
                </div>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageCommunityImage}
                    alt="Junction Community"
                ></SectionImage>
            </Page>
        );
    }
}

export default HomePage;
