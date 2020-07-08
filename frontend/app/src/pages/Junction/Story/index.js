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
                <div className="StoryPage--TopContent">
                    <div className="StoryPage--TopContent--Left">
                        <div>
                            <p className="topic">Our Story</p>
                        </div>
                        <div>
                            <p className="topic-subtitle">What is Junction?</p>
                            <p>
                                What started out in 2015 as a single hackathon
                                in Helsinki, Finland, has now started a movement
                                of tech events all around the world.
                                <br /> With our volunteer-led teams around the
                                world, we organize epic hackathons, speaker
                                events, coding workshops and other tech events
                                around the year: all intended to empower people
                                to create with technology and to fall in love
                                with it.
                                <br /> In our hackathons, we bring together
                                developers, designers and other tech-minded
                                people to create new projects and solve
                                intriguing challenges. In order to offer our
                                participants the most stimulating problems and
                                latest technology, we partner with roughly 60
                                companies yearly. In addition, we organize
                                meetups, speaker events, workshops and more. The
                                event-filled year peaks annually with our
                                flagship event, Junction, held in Finland with
                                around 1500 developers and designers in
                                attendance every year.
                            </p>
                        </div>
                    </div>

                    <div className="StoryPage--TopContent--Right">
                        <div className="StoryPage--TopContent--Right--Box">
                            <h3>15 000</h3>
                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}

export default StoryPage;
