import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import { Grid } from "@material-ui/core";

import Page from "../../PageHOC";
import Button from "../../../components/Button";
import HeaderSection from "../../../components/HeaderSection";
import BlockSection from "../../../components/BlockSection";
import ChallengeGrid from "../../../components/ChallengeGrid";

const items = [
    {
        title: "Vitun hyvä ja ebin",
        desc: "asd",
        img: "asd",
        tags: ["ebin", "vitun hyvä"],
    },
    {
        title: "Ebin",
        desc: "asd",
        img: "asd",
        tags: ["ebin"],
    },
    {
        title: "huutis",
        desc: "asd",
        img: "asd",
        tags: ["huuts"],
    },
    {
        title: "pärskis",
        desc: "asd",
        img: "asd",
        tags: ["pärskis", , "jne"],
    },
    {
        title: "huutis",
        desc: "asd",
        img: "asd",
        tags: ["huutis", "jne"],
    },
];

class Challenges extends PureComponent {
    render() {
        return (
            <Page
                className="HomePage"
                pageTitle="Hack the Future"
                metaDescKey={KEYS.whoAreWeBody}
                ogImageKey={MEDIA_KEYS.homePageHeaderImage}
            >
                <HeaderSection
                    title="Tracks & Challenges"
                    body="The hackathon is divided into tracks based on different industries and themes. All tracks include multiple challenges you can choose to work on during the hackathon: and you can even combine challenges and submit your project to multiple ones!"
                >
                    <Grid spacing={12} direction="row">
                        <Button smaller to text="Tracks" />
                        <Button smaller to text="Challenges" />
                    </Grid>
                </HeaderSection>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    Tracks
                </SectionImage>

                <h1>Tracks here</h1>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    Challenges
                </SectionImage>
                <ChallengeGrid items={items} />
            </Page>
        );
    }
}

export default Challenges;
