import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";

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

class StoryPage extends PureComponent {
    render() {
        return (
            <Page
                className="StoryPage"
                pageTitle="Our story"
                metaDescKey={KEYS.StoryPageSubtitle}
                ogImageKey={MEDIA_KEYS.StoryPageHeaderImage}
            >
                <div>
                    <p className="topic">Our Story</p>
                </div>
                <div className="StoryPage--TopContent">
                    <div className="StoryPage--TopContent--Left">
                        <div></div>
                        <div>
                            <p className="topic-subtitle">What is Junction?</p>
                            <p>
                                What started out in 2015 as a single hackathon
                                in Helsinki, Finland, has now started a movement
                                of tech events all around the world.
                            </p>
                            <p>
                                With our volunteer-led teams around the world,
                                we organize epic hackathons, speaker events,
                                coding workshops and other tech events around
                                the year: all intended to empower people to
                                create with technology and to fall in love with
                                it.
                            </p>
                            <p>
                                {" "}
                                In our hackathons, we bring together developers,
                                designers and other tech-minded people to create
                                new projects and solve intriguing challenges. In
                                order to offer our participants the most
                                stimulating problems and latest technology, we
                                partner with roughly 60 companies yearly. In
                                addition, we organize meetups, speaker events,
                                workshops and more. The event-filled year peaks
                                annually with our flagship event, Junction, held
                                in Finland with around 1500 developers and
                                designers in attendance every year.
                            </p>
                        </div>
                    </div>

                    <div className="StoryPage--TopContent--Right">
                        <div className="StoryPage--TopContent--Right--Box">
                            <h3>15 000+</h3>
                            <h4>TEXT HERE</h4>
                        </div>
                        <div className="StoryPage--TopContent--Right--Box">
                            <h3>15 000+</h3>
                            <h4>TEXT HERE</h4>
                        </div>
                        <div className="StoryPage--TopContent--Right--Box">
                            <h3>15 000+</h3>
                            <h4>TEXT HERE</h4>
                        </div>
                    </div>
                </div>

                <div className="StoryPage--DownContent">
                    <div className="StoryPage--DownContent--Left">
                        <h4 className="topic-subtitle--right">Our mission</h4>
                        <p>
                            Bridging the gap between creators by making everyone
                            fall in love with technology.
                        </p>
                        <h4 className="topic-subtitle--right">Our vision</h4>
                        <p>
                            Being a pioneer in the continuous technological
                            change and encouraging others to keep up with it.
                        </p>
                        <p>
                            We believe that technology is a powerful tool when
                            used right, and everybody should have the
                            possibility to build meaningful things with it:
                            that's why all of our events are centered around
                            learning and creating with technology.
                        </p>
                        <p>
                            Junction is a pack of independently spirited,
                            fiercely unconventional people who do things a
                            little differently. Where others may value the
                            bottom line, we value — well — values.
                        </p>

                        <img
                            src={require("../../../assets/images/story-art2.png")}
                        />
                    </div>
                    <div className="StoryPage--DownContent--Right" s>
                        <img
                            src={require("../../../assets/images/story-art1.png")}
                        />
                        <h1>COMMUNITY</h1>
                        <h1 className="h1-2">OPENNESS</h1>
                        <h1 className="h1-3">DIVERSITY</h1>
                        <h1>PERSISTENCE</h1>
                        <h1 className="h1-5">RESPONSIBILITY</h1>
                    </div>
                </div>
            </Page>
        );
    }
}

export default StoryPage;
