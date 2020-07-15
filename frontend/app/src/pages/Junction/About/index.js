import React, { PureComponent } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import Page from "../../PageHOC";
import DividerLine from "../../../components/DividerLine";
import ImgBlock from "../../../components/ImgBlock";

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
                className="ImgBlock"
                pageTitle="Our story"
                metaDescKey={KEYS.AboutPageSubtitle}
                ogImageKey={MEDIA_KEYS.AboutPageHeaderImage}
            >
                <ImgBlock
                    topic="Our Story"
                    image={require("../../../assets/images/about-our-story.png")}
                    link="/story"
                    left
                />
                <ImgBlock
                    topic="Contact us"
                    image={require("../../../assets/images/about-contact-us.png")}
                    link="/contact"
                />
                <ImgBlock
                    topic="Blog"
                    image={require("../../../assets/images/about-blog.png")}
                    link="https://blog.hackjunction.com/"
                    left
                />
            </Page>
        );
    }
}

export default AboutPage;
