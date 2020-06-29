import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import Divider from "../../../components/Divider";

import SectionImage from "../../../components/SectionImage";
import { Grid } from "@material-ui/core";
import CenteredBlock from "../../../components/CenteredBlock";
import EventCalendar from "../../../components/EventCalendar";

import Page from "../../PageHOC";
import Button from "../../../components/Button";

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

class ConnectedHome extends PureComponent {
    render() {
        return (
            <Page
                className="HomePage"
                pageTitle="Hack the Future"
                metaDescKey={KEYS.whoAreWeBody}
                ogImageKey={MEDIA_KEYS.homePageHeaderImage}
            >
                <CenteredBlock>
                    <Grid className="HomePage--TopContent">
                        <img
                            className="HomePage--logo"
                            src={require("../../../assets/logos/text_black.png")}
                            alt="junction-wordmark"
                        />
                        <h3 className="HomePage-subtitle">
                            We organize epic hackathons and other tech events -
                            around the world, around the year.
                        </h3>
                        <Button regular text="Read More"></Button>
                        <Divider sm />
                        <Grid spacing={12} direction="row">
                            <Button smaller to text="Junction App" />

                            <Button smaller to text="Organize a hackathon" />

                            <Button smaller to text="Junction 2020 Connected" />
                        </Grid>
                        <Divider sm />
                    </Grid>
                </CenteredBlock>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                ></SectionImage>

                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHackingImage}
                    alt="People attending a hackathon"
                ></SectionImage>
                <h1>Upcoming events</h1>
                <EventCalendar />
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageCommunityImage}
                    alt="Junction Community"
                ></SectionImage>
            </Page>
        );
    }
}

export default ConnectedHome;
