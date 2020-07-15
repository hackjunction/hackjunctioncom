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
                question: "asd",
                answer: "asdasd",
                key: "1",
            },
            { question: "What is a hackathon", answer: "asdasd", key: "2" },
            { question: "asd", answer: "asdasd", key: "3" },
            { question: "asd", answer: "asdasd", key: "4" },
            { question: "asd", answer: "asdasd", key: "5" },
        ],
    },
    {
        title: "Schedule",
        questions: [
            {
                question: "vdfvdfbfg",
                answer: "asdasd",
                key: "1",
            },
            { question: "öösös", answer: "asdasd", key: "1" },
            { question: "ösdsfds", answer: "asdasd", key: "1" },
            { question: "aeergerg", answer: "asdasd", key: "1" },
        ],
    },
    {
        title: "Partners",
        questions: [
            {
                question: "adasvvdfvdf",
                answer: "asdasd",
                key: "1",
            },
            { question: "title", answer: "asdasd", key: "1" },
            { question: "asdsdkfmsld", answer: "asdasd", key: "1" },
            { question: "bedosfdm", answer: "asdasd", key: "1" },
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
