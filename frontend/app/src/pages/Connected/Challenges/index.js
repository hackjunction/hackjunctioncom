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
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
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
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        key: 1,
    },
    {
        title: "GameJam",
        desc: "Want to invent the coolest game ever? Now’s the time!",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),

            require("../../../assets/logos/emblem_black.png"),
        ],
        key: 2,
    },
    {
        title: "intelligent frameworks",
        desc: "Are you intelligent? Do you know something about frameworks? Great.",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        key: 3,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        key: 4,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        key: 5,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        key: 6,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        key: 7,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
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
                pageTitle="Junction 2020 Connected"
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
