import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import { Grid, Typography, Box } from "@material-ui/core";
import CenteredBlock from "../../../components/CenteredBlock";
import Divider from "../../../components/Divider";
import Page from "../../PageHOC";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

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
                metaDescKey={KEYS.StoryPageSubtitle}
                ogImageKey={MEDIA_KEYS.StoryPageHeaderImage}
            >
                <CenteredBlock>
                    <Grid
                        className="StoryPage--TopContent"
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid
                            alignItems="center"
                            justify="center"
                            className="StoryPage--TopContent--Margin"
                        >
                            <Grid md={12}>
                                <Typography className="topic">
                                    Our Story
                                </Typography>
                            </Grid>
                            <Grid md={8} container alignItems="center">
                                <Typography className="topic-subtitle">
                                    What is Junction?
                                </Typography>
                                <Typography>
                                    What started out in 2015 as a single
                                    hackathon in Helsinki, Finland, has now
                                    started a movement of tech events all around
                                    the world.
                                    <br /> With our volunteer-led teams around
                                    the world, we organize epic hackathons,
                                    speaker events, coding workshops and other
                                    tech events around the year: all intended to
                                    empower people to create with technology and
                                    to fall in love with it.
                                    <br /> In our hackathons, we bring together
                                    developers, designers and other tech-minded
                                    people to create new projects and solve
                                    intriguing challenges. In order to offer our
                                    participants the most stimulating problems
                                    and latest technology, we partner with
                                    roughly 60 companies yearly. In addition, we
                                    organize meetups, speaker events, workshops
                                    and more. The event-filled year peaks
                                    annually with our flagship event, Junction,
                                    held in Finland with around 1500 developers
                                    and designers in attendance every year.
                                </Typography>
                            </Grid>
                            <Grid
                                md={4}
                                container
                                justify="center"
                                alignItems="center"
                            >
                                <Box className="StoryPage--box">
                                    <Typography className="StoryPage--box">
                                        15 000
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </CenteredBlock>
            </Page>
        );
    }
}

export default StoryPage;
