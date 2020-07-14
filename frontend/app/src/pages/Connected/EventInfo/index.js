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
            { question: "asd", answer: "asdasd", key: "2" },
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
            className="Connected ScrollSnap"
            pageTitle="Event Info"
            metaDescKey={KEYS.whoAreWeBody}
            ogImageKey={MEDIA_KEYS.homePageHeaderImage}
        >
            <HeaderSection
                title="Event information"
                body="TLorem ipsum dolor sit arem lorem ipsum dolor sit amet lorem ipsum dolor sit"
            ></HeaderSection>
            <DividerLine />
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            >
                General information
            </SectionImage>
            <DividerLine />
            Tähän sisältöö
            <DividerLine />
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            >
                Timeline
            </SectionImage>
            <DividerLine stop />
            <BlockSection
                title="Important dates & timeline"
                extra={
                    <img
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
            <DividerLine />
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            >
                FAQ
            </SectionImage>
            <DividerLine stop />
            <SingleColumnSection
                title="FAQ"
                subtitle="Our expertise of organising hackathons combined with the
                    power of a highly-customizable platform for events makes
                    hosting diverse events possible."
                center
            >
                <FaqSection items={items} />
                <span>
                    Didn’t find what you were looking for? Our team is happy to
                    help you with anything and everything, just{" "}
                    <a href="mailto:hello@hackjunction.com">
                        shoot us a message!
                    </a>
                </span>
            </SingleColumnSection>
            <DividerLine />
            <SectionImage
                imageKey={MEDIA_KEYS.homePageHeaderImage}
                alt="Header image"
            >
                For Partners
            </SectionImage>
            <DividerLine stop />
            <SingleColumnSection>Tähän sisältöö</SingleColumnSection>
        </Page>
    );
};
