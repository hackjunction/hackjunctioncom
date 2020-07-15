import React from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import Page from "../../PageHOC";
import HeaderSection from "../../../components/HeaderSection";
import SingleColumnSection from "../../../components/SingleColumnSection";
import BlockSection from "../../../components/BlockSection";
import DividerLine from "../../../components/DividerLine";
import Button from "../../../components/Button";

import Timeline from "../Components/Timeline";
import FaqSection from "../Components/FaqSection";

const items = [
    {
        title: "General",
        questions: [
            {
                question: "What is Junction?",
                answer:
                    "Junction is a global tech community, organizing hackathons and tech events around the year and around the world offline and online. Junction 2019 is our flagship event - Europe’s leading hackathon, organized for the fifth time this year!",
                key: "1",
            },
            {
                question: "What is Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online.",
                key: "2",
            },
            {
                question: "How can I attend Junction 2020 Connected?",
                answer:
                    "**Apply to the event in Junction App during the application period, which takes place from 1st of September to 9th of October.** You'll need to submit basic information about your background, experience and motivation. You can apply either alone or as a team. You will apply with the same application to both the hackathon itself and the hubs nearby your home town.",
                key: "3",
            },
            {
                question: "Does it cost to attend?",
                answer:
                    "Nope! The event is free of charge for all accepted participants.",
                key: "4",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is for anyone and everyone passionate about creating with techonology.",
                key: "5",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "1 to 5 people - we suggest having a minimum of 3 people in a team.",
                key: "6",
            },
            {
                question: "Who are the people behind Junction?",
                answer:
                    "Junction is run by a student and volunteer-based team, passionate about organizing the best hackathons in the world!",
                key: "7",
            },
            {
                question:
                    "How can I get the latest news and updates on Junction 2020 Connected??",
                answer:
                    "Subscribe to our newsletter and follow us on social media **@hackjunction** to get the latest news and updates!",
                key: "8",
            },
        ],
    },
    {
        title: "Schedule",
        questions: [
            {
                question: "What is Junction?",
                answer:
                    "Junction is a global tech community, organizing hackathons and tech events around the year and around the world offline and online. Junction 2019 is our flagship event - Europe’s leading hackathon, organized for the fifth time this year!",
                key: "1",
            },
            {
                question: "What is Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online.",
                key: "2",
            },
            {
                question: "How can I attend Junction 2020 Connected?",
                answer:
                    "**Apply to the event in Junction App during the application period, which takes place from 1st of September to 9th of October.** You'll need to submit basic information about your background, experience and motivation. You can apply either alone or as a team. You will apply with the same application to both the hackathon itself and the hubs nearby your home town.",
                key: "3",
            },
            {
                question: "Does it cost to attend?",
                answer:
                    "Nope! The event is free of charge for all accepted participants.",
                key: "4",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is for anyone and everyone passionate about creating with techonology.",
                key: "5",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "1 to 5 people - we suggest having a minimum of 3 people in a team.",
                key: "6",
            },
            {
                question: "Who are the people behind Junction?",
                answer:
                    "Junction is run by a student and volunteer-based team, passionate about organizing the best hackathons in the world!",
                key: "7",
            },
            {
                question:
                    "How can I get the latest news and updates on Junction 2020 Connected??",
                answer:
                    "Subscribe to our newsletter and follow us on social media **@hackjunction** to get the latest news and updates!",
                key: "8",
            },
        ],
    },
    {
        title: "Online",
        questions: [
            {
                question: "What is Junction?",
                answer:
                    "Junction is a global tech community, organizing hackathons and tech events around the year and around the world offline and online. Junction 2019 is our flagship event - Europe’s leading hackathon, organized for the fifth time this year!",
                key: "1",
            },
            {
                question: "What is Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online.",
                key: "2",
            },
            {
                question: "How can I attend Junction 2020 Connected?",
                answer:
                    "**Apply to the event in Junction App during the application period, which takes place from 1st of September to 9th of October.** You'll need to submit basic information about your background, experience and motivation. You can apply either alone or as a team. You will apply with the same application to both the hackathon itself and the hubs nearby your home town.",
                key: "3",
            },
            {
                question: "Does it cost to attend?",
                answer:
                    "Nope! The event is free of charge for all accepted participants.",
                key: "4",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is for anyone and everyone passionate about creating with techonology.",
                key: "5",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "1 to 5 people - we suggest having a minimum of 3 people in a team.",
                key: "6",
            },
            {
                question: "Who are the people behind Junction?",
                answer:
                    "Junction is run by a student and volunteer-based team, passionate about organizing the best hackathons in the world!",
                key: "7",
            },
            {
                question:
                    "How can I get the latest news and updates on Junction 2020 Connected??",
                answer:
                    "Subscribe to our newsletter and follow us on social media **@hackjunction** to get the latest news and updates!",
                key: "8",
            },
        ],
    },
    {
        title: "Submissions",
        questions: [
            {
                question: "What is Junction?",
                answer:
                    "Junction is a global tech community, organizing hackathons and tech events around the year and around the world offline and online. Junction 2019 is our flagship event - Europe’s leading hackathon, organized for the fifth time this year!",
                key: "1",
            },
            {
                question: "What is Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online.",
                key: "2",
            },
            {
                question: "How can I attend Junction 2020 Connected?",
                answer:
                    "**Apply to the event in Junction App during the application period, which takes place from 1st of September to 9th of October.** You'll need to submit basic information about your background, experience and motivation. You can apply either alone or as a team. You will apply with the same application to both the hackathon itself and the hubs nearby your home town.",
                key: "3",
            },
            {
                question: "Does it cost to attend?",
                answer:
                    "Nope! The event is free of charge for all accepted participants.",
                key: "4",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is for anyone and everyone passionate about creating with techonology.",
                key: "5",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "1 to 5 people - we suggest having a minimum of 3 people in a team.",
                key: "6",
            },
            {
                question: "Who are the people behind Junction?",
                answer:
                    "Junction is run by a student and volunteer-based team, passionate about organizing the best hackathons in the world!",
                key: "7",
            },
            {
                question:
                    "How can I get the latest news and updates on Junction 2020 Connected??",
                answer:
                    "Subscribe to our newsletter and follow us on social media **@hackjunction** to get the latest news and updates!",
                key: "8",
            },
        ],
    },

    {
        title: "Hubs",
        questions: [
            {
                question: "asdadassda is Junction?",
                answer:
                    "Junction is a global tech community, organizing hackathons and tech events around the year and around the world offline and online. Junction 2019 is our flagship event - Europe’s leading hackathon, organized for the fifth time this year!",
                key: "1",
            },
            {
                question: "What is Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is a new take on the established concept of a hackathon; participants all over the world can join physical locations hosted by Junction and other organizations, or participate in the event fully online.",
                key: "2",
            },
            {
                question: "How can I attend Junction 2020 Connected?",
                answer:
                    "**Apply to the event in Junction App during the application period, which takes place from 1st of September to 9th of October.** You'll need to submit basic information about your background, experience and motivation. You can apply either alone or as a team. You will apply with the same application to both the hackathon itself and the hubs nearby your home town.",
                key: "3",
            },
            {
                question: "Does it cost to attend?",
                answer:
                    "Nope! The event is free of charge for all accepted participants.",
                key: "4",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "Junction 2020 Connected is for anyone and everyone passionate about creating with techonology.",
                key: "5",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer:
                    "1 to 5 people - we suggest having a minimum of 3 people in a team.",
                key: "6",
            },
            {
                question: "Who are the people behind Junction?",
                answer:
                    "Junction is run by a student and volunteer-based team, passionate about organizing the best hackathons in the world!",
                key: "7",
            },
            {
                question:
                    "How can I get the latest news and updates on Junction 2020 Connected??",
                answer:
                    "Subscribe to our newsletter and follow us on social media **@hackjunction** to get the latest news and updates!",
                key: "8",
            },
        ],
    },
];

export default ({}) => {
    return (
        <Page
            className="Connected ConnectedContent"
            pageTitle="Event Info"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                title="Event information"
                body="TLorem ipsum dolor sit arem lorem ipsum dolor sit amet lorem ipsum dolor sit"
            >
                <div className="Button-row">
                    {/*
                    <Button
                        className="Button-default"
                        text="General Information"
                    />
                    <Button className="Button-default" text="For Partners" />*/}
                    <Button className="Button-default" text="Schedule" />
                    <Button className="Button-default" text="FAQ" />
                </div>
            </HeaderSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected/info/timeline.png"),
                }}
                alt="Timeline"
            >
                Timeline
            </SectionImage>
            <DividerLine />

            <BlockSection
                className="TimelineSection ScrollSnapElem"
                title="Important dates & timeline"
                extra={
                    <img
                        className="Connected-chains"
                        src={require("../../../assets/images/visu-chains.svg")}
                    />
                }
            >
                <Timeline date="September 1st">
                    Application period begins
                </Timeline>
                <Timeline date="October 6th">
                    Virtual matchmaking begins
                </Timeline>
                <Timeline date="September 1st">
                    Application period begins
                </Timeline>
                <Timeline date="September 1st">
                    Application period begins
                </Timeline>
                <Timeline date="September 1st">
                    Application period begins
                </Timeline>
                <Timeline date="September 1st">
                    Application period begins
                </Timeline>
                <Timeline date="November 6th to 8th" last>
                    Junction 2020 Connected
                </Timeline>
            </BlockSection>
            {/* Not relevant yet
            <SingleColumnSection
                title="Schedule of the weekend"
                halfpage
            ></SingleColumnSection>
            */}
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected/info/faq.png"),
                }}
                alt="FAQ"
            >
                FAQ
            </SectionImage>

            <DividerLine />
            <SingleColumnSection
                subtitle="Our expertise of organising hackathons combined with the
                    power of a highly-customizable platform for events makes
                    hosting diverse events possible."
                center
                nolimit
                className="ScrollSnapElem"
            >
                <FaqSection items={items} />
                <div>
                    Didn’t find what you were looking for? Our team is happy to
                    help you with anything and everything, just shoot us a
                    message!
                    <div>
                        <a href="mailto:hello@hackjunction.com">
                            <Button
                                className="Button-default"
                                text="Contact us"
                            />
                        </a>
                    </div>
                </div>
            </SingleColumnSection>
        </Page>
    );
};
