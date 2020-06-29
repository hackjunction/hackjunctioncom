import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../redux/staticmedia/keys";

import SectionImage from "../../components/SectionImage";
import { Grid, Typography } from "@material-ui/core";
import CenteredBlock from "../../components/CenteredBlock";
import Divider from "../../components/Divider";
import Page from "../PageHOC";
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
                            <Grid>
                                <Typography className="topic">
                                    Our Story
                                </Typography>
                            </Grid>
                            <Grid
                                md={7}
                                container
                                justify="center"
                                alignItems="center"
                            >
                                <Typography className="topic-subtitle">
                                    What is Junction?
                                </Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed accumsan est quis quam
                                    varius pharetra posuere suscipit dui. Proin
                                    vehicula risus ut consequat posuere. Cras
                                    ligula lorem, imperdiet sollicitudin sem
                                    luctus, feugiat imperdiet justo. Vestibulum
                                    tristique lorem ex. Curabitur at orci
                                    hendrerit, varius diam eu, lobortis nisi.
                                    Vestibulum blandit ante non eros rhoncus,
                                    ultrices dictum purus lobortis. Cras massa
                                    urna, suscipit in nulla quis, varius
                                    consectetur ex. Cras condimentum facilisis
                                    tempus. Integer et ligula mauris. Sed ut
                                    velit eget dui consequat luctus ac id nisi.
                                    Quisque commodo hendrerit mi, nec hendrerit
                                    ex tempor sed. Etiam vitae mi et purus
                                    dignissim ultricies id eget nisl. Nam in
                                    velit justo. In fringilla, diam ut semper
                                    maximus, lorem arcu imperdiet massa, eu
                                    euismod est orci vitae nulla. Fusce pulvinar
                                    turpis risus, sit amet luctus dolor
                                    fermentum at.
                                </Typography>
                            </Grid>
                            <Grid md={5}></Grid>
                        </Grid>
                    </Grid>
                </CenteredBlock>
                <CenteredBlock>
                    <Grid
                        className="StoryPage--TopContent "
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid md={7}>
                            <SectionImage
                                imageKey={MEDIA_KEYS.StoryPageContactUsImage}
                                alt="Header image"
                            ></SectionImage>
                        </Grid>
                        <Grid md={5}>
                            <Typography className="topic">
                                Contact us
                            </Typography>
                            <TrendingFlatIcon className="icon" />
                        </Grid>
                    </Grid>

                    <Grid
                        className="StoryPage--TopContent"
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid md={5}>
                            <Typography className="topic">Blog</Typography>
                            <TrendingFlatIcon className="icon" />
                        </Grid>

                        <Grid md={7}>
                            <SectionImage
                                imageKey={MEDIA_KEYS.StoryPageBlogImage}
                                alt="Header image"
                            ></SectionImage>
                        </Grid>
                    </Grid>
                </CenteredBlock>
            </Page>
        );
    }
}

export default StoryPage;
