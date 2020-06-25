import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../redux/staticmedia/keys";

import Divider from "../../components/Divider";

import SectionImage from "../../components/SectionImage";
import Planet from "../../components/Planet";
import { Grid, Typography } from "@material-ui/core";
import CenteredBlock from "../../components/CenteredBlock";
import EventCalendar from "../../components/EventCalendar";
import { spacing } from "@material-ui/system";

import Page from "../PageHOC";
import LinkButton from "../../components/LinkButton/index";
import Button from "../../components/Button";
import SmallButton from "../../components/SmallButton";

const BOTTOM_LINKS = [
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
    {
        imageKey: MEDIA_KEYS.calendarPageHeaderImage,
        imageAlt: "Link",
        linkTo: "/calendar",
        linkText: "Calendar",
    },
];

class StoryPage extends PureComponent {
    render() {
        return (
            <Page
                className="StoryPage"
                pageTitle="Our story"
                metaDescKey={KEYS.storyPageSubtitle}
                ogImageKey={MEDIA_KEYS.storyPageHeaderImage}
            >
                <CenteredBlock>
                    <Grid
                        className="StoryPage--TopContent"
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                    >
                        {/* ADD OUR STORY HERE */}

                        <Typography variant="h2">Our story</Typography>

                        <svg
                            src="/frontend/src/assets/images/about-our-story.svg"
                            alt="Our Story"
                        />
                    </Grid>
                    <Divider sm />
                </CenteredBlock>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                ></SectionImage>
                <Planet />
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

export default StoryPage;
