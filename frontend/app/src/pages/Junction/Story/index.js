import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";
import DividerLine from "../../../components/DividerLine";
import SingleColumnSection from "../../../components/SingleColumnSection";
import BlockSection from "../../../components/BlockSection";

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
                <SingleColumnSection
                    title="Our Story"
                    subtitle="What is Junction?"
                >
                    <div>
                        <p>
                            What started out in 2015 as a single hackathon in
                            Helsinki, Finland, has now started a movement of
                            tech events all around the world.
                        </p>
                        <p>
                            With our volunteer-led teams around the world, we
                            organize epic hackathons, speaker events, coding
                            workshops and other tech events around the year: all
                            intended to empower people to create with technology
                            and to fall in love with it.
                        </p>
                        <p>
                            In our hackathons, we bring together developers,
                            designers and other tech-minded people to create new
                            projects and solve intriguing challenges. In order
                            to offer our participants the most stimulating
                            problems and latest technology, we partner with
                            roughly 60 companies yearly. In addition, we
                            organize meetups, speaker events, workshops and
                            more. The event-filled year peaks annually with our
                            flagship event, Junction, held in Finland with
                            around 1500 developers and designers in attendance
                            every year.
                        </p>
                    </div>

                    <div className="StoryPage--TopContent--Right">
                        <div className="StoryPage--TopContent--Right--Box">
                            <h2>15 000+</h2>
                            <h4>TEXT HERE</h4>
                        </div>
                        <div className="StoryPage--TopContent--Right--Box">
                            <h2>15 000+</h2>
                            <h4>TEXT HERE</h4>
                        </div>
                        <div className="StoryPage--TopContent--Right--Box">
                            <h2>15 000+</h2>
                            <h4>TEXT HERE</h4>
                        </div>
                    </div>
                </SingleColumnSection>
                <DividerLine stop />
                <BlockSection
                    halfpage
                    extra={
                        <>
                            <h2>Our mission</h2>
                            <p>
                                Bridging the gap between creators by making
                                everyone fall in love with technology.
                            </p>
                            <h2>Our vision</h2>
                            <p>
                                Being a pioneer in the continuous technological
                                change and encouraging others to keep up with
                                it.
                            </p>
                            <p>
                                We believe that technology is a powerful tool
                                when used right, and everybody should have the
                                possibility to build meaningful things with it:
                                that's why all of our events are centered around
                                learning and creating with technology.
                            </p>
                        </>
                    }
                >
                    <img
                        src={require("../../../assets/images/story-art1.png")}
                    />
                </BlockSection>
                <DividerLine />
                <BlockSection
                    halfpage
                    inverted
                    title="Our values"
                    extra={
                        <>
                            <p>
                                Junction is a pack of independently spirited,
                                fiercely unconventional people who do things a
                                little differently.
                            </p>
                            <p>
                                Where others may value the bottom line, we value
                                — well — values.
                            </p>
                            <h3>COMMUNITY OPENNESS DIVERSITY</h3>
                            <h3>PERSISTENCE RESPONSIBILITY</h3>
                        </>
                    }
                >
                    <img
                        src={require("../../../assets/images/story-art2.png")}
                    />
                </BlockSection>
            </Page>
        );
    }
}

export default StoryPage;
