import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import { Grid } from "@material-ui/core";

import Page from "../../PageHOC";
import Button from "../../../components/Button";
import HeaderSection from "../../../components/HeaderSection";
import TrackGrid from "../../../components/TrackGrid";
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

const tracks = [
    {
        title: "Api Management",
        desc: "Track description can be quite lengthy",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        key: 0,
    },
    {
        title: "cutting edge technologies",
        desc: "Track description can be quite lengthy",
        logos: [],
        key: 1,
    },
    {
        title: "GameJam",
        desc: "Want to invent the coolest game ever? Now’s the time!",
        logos: [
            require("../../../assets/logos/emblem_black.png"),

            require("../../../assets/logos/emblem_black.png"),
        ],
        key: 2,
    },
    {
        title: "intelligent frameworks",
        desc:
            "Are you intelligent? Do you know something about frameworks? Great.",
        logos: [require("../../../assets/logos/emblem_black.png")],
        key: 3,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        key: 4,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        logos: [],
        key: 5,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        key: 6,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        logos: [require("../../../assets/logos/emblem_black.png")],
        key: 7,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        key: 8,
    },
];

class Challenges extends PureComponent {
    render() {
        return (
            <Page
                className="Connected"
                pageTitle="Hack the Future"
                metaDescKey={KEYS.whoAreWeBody}
                ogImageKey={MEDIA_KEYS.homePageHeaderImage}
            >
                <HeaderSection
                    title="Tracks & Challenges"
                    body="The hackathon is divided into tracks based on different industries and themes. All tracks include multiple challenges you can choose to work on during the hackathon: and you can even combine challenges and submit your project to multiple ones!"
                >
                    <Grid spacing={12} direction="row">
                        <Button className="Button-default" to text="Tracks" />
                        <Button
                            className="Button-default"
                            to
                            text="Challenges"
                        />
                    </Grid>
                </HeaderSection>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    Tracks
                </SectionImage>

                <TrackGrid items={tracks} />

                {/* Challenge section is hidden until some challenges have been signed
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    Challenges
                </SectionImage>
                <ChallengeGrid items={items} />
                */}
            </Page>
        );
    }
}

export default Challenges;
