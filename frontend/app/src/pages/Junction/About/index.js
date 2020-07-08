import React, { PureComponent } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import Page from "../../PageHOC";

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
                <a href="ADDLINKHERE">
                    <div className="AboutPage--TopContent">
                        <div className="AboutPage--textAndArrowDiv">
                            <h1 className="topic">Our story</h1>
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
                </a>
                <a href="ADDLINKHERE">
                    <div className="AboutPage--TopContent">
                        <div className="AboutPage--ImageBlock">
                            <img
                                src={require("../../../assets/images/about-contact-us.png")}
                                width="80%"
                                height="100%"
                            />
                        </div>
                        <div className="AboutPage--textAndArrowDiv">
                            <h1 className="topic">Contact us</h1>
                            <img
                                src={require("../../../assets/icons/story_arrow.png")}
                            />
                        </div>
                    </div>
                </a>
                <a href="ADDLINKHERE">
                    <div className="AboutPage--TopContent">
                        <div className="AboutPage--textAndArrowDiv">
                            <h1 className="topic">Blog</h1>
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
                </a>
            </Page>
        );
    }
}

export default AboutPage;
