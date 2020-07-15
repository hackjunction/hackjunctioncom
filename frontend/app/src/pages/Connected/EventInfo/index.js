import React, { PureComponent, Suspense, forwardRef } from "react";
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
                    "Junction 2020 Connected is a new take on the hackathon world - an online hackathon with physical locations distributed around the world. Bring your team to the local hub and work on the global challenges provided by Junction partners, and compete for the grand prize!",
                key: "2",
            },
            {
                question: "How do I attend Junction 2020 Connected?",
                answer:
                    "When the application period opens on the 1st of September, head to the Junction App and register to Junction 2020 Connected.",
                key: "3",
            },
            {
                question: "Does it cost to attend?",
                answer:
                    "Of course not, this hackathon is completely free for participants!",
                key: "4",
            },
            {
                question: "Who can attend Junction 2020 Connected?",
                answer: "Anyone!",
                key: "5",
            },
            {
                question:
                    "When and where will Junction 2020 Connected take place?",
                answer:
                    "Junction 2020 Connected will take place all over the world on the 6th to the 8th of November.",
                key: "6",
            },
            {
                question: "Who are the people behind Junction?",
                answer: "That's a mystery.",
                key: "7",
            },
        ],
    },
    {
        title: "Schedule",
        questions: [
            {
                question:
                    "When and where will Junction 2020 Connected take place?",
                answer:
                    "Junction 2020 Connected will take place all over the world on the 6th to the 8th of November.",
                key: "1",
            },
            {
                question: "When is the application period?",
                answer:
                    "The application period starts on the 1st of September and ends on the 30th of September, in short, the application period is in September.",
                key: "2",
            },
            {
                question: "When will I know if I got accepted?",
                answer: "asdasd",
                key: "3",
            },
            {
                question:
                    "How are time zones handled in Junction 2020 Connected?",
                answer:
                    "The whole event follows the same time zone, and everything happens simultaenously around the world.",
                key: "4",
            },
        ],
    },

    {
        title: "Submissions",
        questions: [
            {
                question: "Who owns the intellectual property of a hack?",
                answer:
                    "Always the team who created the project - not Junction nor our partner companies.",
                key: "1",
            },
            {
                question: "Can I submit more than one project?",
                answer: "asdasd",
                key: "2",
            },
            {
                question: "Can I submit my project to multiple challenges?",
                answer: "asdasd",
                key: "3",
            },
        ],
    },
    {
        title: "Hubs",
        questions: [
            {
                question:
                    "I live in country X, but I would like to travel to a hub in country Y. Is this possible?",
                answer:
                    "If the restrictions in the two countries allow you to travel there and you're accepted to the hub, then yes, it is possible!",
                key: "1",
            },
            {
                question: "Can I organize a hub?",
                answer:
                    "Of course! Shoot us a message at hello(at)hackjunction.com and we'll roll you into the loop.",
                key: "2",
            },
            {
                question: "Why do you have to separately apply for some hubs?",
                answer:
                    "Due to limited space and availability, participants have to apply for hubs.",
                key: "3",
            },
            {
                question: "What is the difference between the hubs?",
                answer:
                    "The location of course, and what the organizers on location can offer you.",
                key: "4",
            },
        ],
    },

    {
        title: "Online",
        questions: [
            {
                question:
                    "If I attend the event online, will I get the same possibilities to interact with other participants?",
                answer:
                    "Yes! We'll be using an online event software where you can join other participants and partners for a good time.",
                key: "1",
            },
            {
                question:
                    "If I attend the event online, will I get the same possibilities to interact with other partners?",
                answer:
                    "Yes! We'll have virtual partner booths for you to enjoy.",
                key: "2",
            },
        ],
    },
];

export default ({}) => {
    return (
        <Page
            className="Connected"
            pageTitle="Event Info"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                title="Event information"
                body="TLorem ipsum dolor sit arem lorem ipsum dolor sit amet lorem ipsum dolor sit"
            >
                <div className="Button-row">
                    <Button
                        className="Button-default"
                        text="General Information"
                    />
                    <Button className="Button-default" text="Schedule" />
                    <Button className="Button-default" text="FAQ" />
                    <Button className="Button-default" text="For Partners" />
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
            <DividerLine stop />
            <BlockSection
                className="TimelineSection"
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
            <SingleColumnSection
                title="Schedule of the weekend"
                halfpage
            ></SingleColumnSection>
            <DividerLine />
            <SectionImage
                image={{
                    url: require("../../../assets/images/connected/info/faq.png"),
                }}
                alt="FAQ"
            >
                FAQ
            </SectionImage>
            <DividerLine stop />
            <SingleColumnSection
                subtitle="Our expertise of organising hackathons combined with the
                    power of a highly-customizable platform for events makes
                    hosting diverse events possible."
                center
            >
                <FaqSection items={items} />
            </SingleColumnSection>
            <SingleColumnSection center halfpage>
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
            <DividerLine stop />
        </Page>
    );
};
