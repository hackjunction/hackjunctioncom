import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import { div, Typography, Link } from "@material-ui/core";
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

class AboutPage extends PureComponent {
    render() {
        return (
            <Page
                className="AboutPage"
                pageTitle="Our story"
                metaDescKey={KEYS.AboutPageSubtitle}
                ogImageKey={MEDIA_KEYS.AboutPageHeaderImage}
            >
                <div className="AboutPage--TopContent">
                    <div className="AboutPage--textAndArrowDiv">
                        <Typography className="topic">Our Story</Typography>
                        <img
                            src={require("../../../assets/icons/story_arrow.png")}
                        />
                    </div>
                    <div className="AboutPage--ImageBlock">
                        <img
                            src={require("../../../assets/images/about-our-story.png")}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="AboutPage--TopContent">
                    <div className="AboutPage--ImageBlock--left">
                        <img
                            src={require("../../../assets/images/about-contact-us.png")}
                            width="80%"
                            height="100%"
                        />
                    </div>
                    <div className="AboutPage--textAndArrowDiv--right">
                        <Typography className="topic">Contact us</Typography>
                        <img
                            src={require("../../../assets/icons/story_arrow.png")}
                        />
                    </div>
                </div>

                <div className="AboutPage--TopContent">
                    <div className="AboutPage--textAndArrowDiv">
                        <Typography className="topic">Test</Typography>
                        <img
                            src={require("../../../assets/icons/story_arrow.png")}
                        />
                    </div>
                    <div className="AboutPage--ImageBlock">
                        <img
                            src={require("../../../assets/images/about-blog.png")}
                            width="80%"
                            height="100%"
                        />
                    </div>
                </div>
                <div></div>
            </Page>
        );
    }
}

export default AboutPage;
