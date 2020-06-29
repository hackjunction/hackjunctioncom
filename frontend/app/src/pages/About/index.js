import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../redux/staticmedia/keys";

import SectionImage from "../../components/SectionImage";
import { Grid, Typography, Link } from "@material-ui/core";
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

class AboutPage extends PureComponent {
    render() {
        return (
            <Page
                className="AboutPage"
                pageTitle="Our story"
                metaDescKey={KEYS.AboutPageSubtitle}
                ogImageKey={MEDIA_KEYS.AboutPageHeaderImage}
            >
                <CenteredBlock>
                    <Grid
                        className="AboutPage--TopContent"
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid
                            sm={6}
                            md={5}
                            alignItems="center"
                            justify="center"
                        >
                            >
                            <Typography className="topic">Our Story</Typography>
                            <img
                                src={require("../../assets/icons/story_arrow.png")}
                            />
                        </Grid>
                        <Grid sm={6} md={7}>
                            {/* <SectionImage
                                imageKey={MEDIA_KEYS.AboutPageOurStoryImage}
                                alt="Header image"
                            ></SectionImage> */}
                            <img
                                src={require("../../assets/images/about-our-story.png")}
                                width="100%"
                                height="100%"
                            />
                        </Grid>
                    </Grid>
                </CenteredBlock>
                <CenteredBlock>
                    <Grid
                        className="AboutPage--TopContent "
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid md={7}>
                            {/* <SectionImage
                                imageKey={MEDIA_KEYS.AboutPageContactUsImage}
                                alt="Header image"
                            ></SectionImage>
                             */}
                            <img
                                src={require("../../assets/images/about-contact-us.png")}
                                width="100%"
                                height="100%"
                            />
                        </Grid>
                        <Grid md={5}>
                            <Typography className="topic">
                                Contact us
                            </Typography>

                            <img
                                src={require("../../assets/icons/story_arrow.png")}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        className="AboutPage--TopContent"
                        container
                        justify="center"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid md={5}>
                            <Typography className="topic">Blog</Typography>
                            <img
                                src={require("../../assets/icons/story_arrow.png")}
                            />
                        </Grid>

                        <Grid md={7}>
                            {/* <SectionImage
                                imageKey={MEDIA_KEYS.AboutPageBlogImage}
                                alt="Header image"
                            ></SectionImage> */}
                            <img
                                src={require("../../assets/images/about-blog.png")}
                                width="100%"
                                height="100%"
                            />
                        </Grid>
                    </Grid>
                </CenteredBlock>
            </Page>
        );
    }
}

export default AboutPage;
