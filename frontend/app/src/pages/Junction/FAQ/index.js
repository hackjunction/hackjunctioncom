import React from "react";
import "./style.scss";
import FaqGrid from "../../../components/FaqGrid";
import SingleColumnSection from "../../../components/SingleColumnSection";
import SmallButton from "../../../components/SmallButton";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import Page from "../../PageHOC";

const items = [
    {
        question: "asd",
        answer: "asdasd",
        key: "1",
    },
    { question: "What is a hackathon", answer: "asdasd", key: "2" },
    { question: "asd", answer: "asdasd", key: "3" },
    { question: "asd", answer: "asdasd", key: "4" },
    { question: "asd", answer: "asdasd", key: "2" },
];

export default () => {
    return (
        <Page
            className="FaqPage"
            pageTitle="FAQ"
            metaDescKey={KEYS.AboutPageSubtitle}
            ogImageKey={MEDIA_KEYS.AboutPageHeaderImage}
        >
            <SingleColumnSection
                center
                title="FAQ"
                subtitle="Our expertise of organising hackathons combined with the power of a highly-customizable platform for events makes hosting diverse events possible."
            >
                <div>
                    <SmallButton to="/" text="huutis" />
                    <SmallButton to="/" text="huutis" />
                    <SmallButton to="/" text="huutis" />
                    <SmallButton to="/" text="huutis" />
                </div>
                <FaqGrid items={items} />
                <p>
                    Didn’t find what you were looking for? Our team is happy to
                    help you with anything and everything, just shoot us a
                    message!
                </p>
                <SmallButton to="/" text="huutis" />
            </SingleColumnSection>
        </Page>
    );
};
