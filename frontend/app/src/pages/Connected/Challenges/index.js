import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import { Link, Element } from "react-scroll";

import SectionImage from "../../../components/SectionImage";
import { Grid } from "@material-ui/core";

import "../../../components/HeaderSection/style.scss";

import Page from "../../PageHOC";
import Button from "../../../components/Button";
import HeaderSection from "../../../components/HeaderSection";
import TrackGrid from "../../../components/TrackGrid";
import BlockSection from "../../../components/BlockSection";
import ChallengeGrid from "../../../components/ChallengeGrid";

const challenges = [
    {
        title: "Api Management",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus.",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'none',
        tags: ["api"],
        key: 0,
    },
    {
        title: "cutting edge technologies",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        background: 'none',
        tags: ["technologies"],
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
        background: 'none',
        tags: ["jam"],
        key: 2,
    },
    {
        title: "intelligent frameworks",
        desc: "Are you intelligent? Do you know something about frameworks? Great.",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        background: 'none',
        tags: ["frameworks"],
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
        background: 'none',
        tags: ["vitun hyvä", "ebin"],
        key: 4,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        background: 'none',
        tags: ["vitun hyvä", "ebin"],
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
        background: 'none',
        tags: ["vitun hyvä", "ebin"],
        key: 6,
    },
    {
        title: "Vitun hyvä",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        background: 'none',
        tags: ["vitun hyvä"],
        key: 7,
    },
    {
        title: "Ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'none',
        tags: ["ebin"],
        key: 8,
    },
];
/*
const tracks = [
    {
        title: "Api Management",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus.",
        logos: [
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
            require("../../../assets/logos/emblem_black.png"),
        ],
        background: 'url("/card.png")',
        key: 0,
    },
    {
        title: "cutting edge technologies",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        background: 'url("/card.png")',
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
        background: 'url("/card.png")',
        key: 2,
    },
    {
        title: "intelligent frameworks",
        desc: "Are you intelligent? Do you know something about frameworks? Great.",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        background: 'url("/card.png")',
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
        background: 'url("/card.png")',
        key: 4,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [],
        background: 'url("/card.png")',
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
        background: 'url("/card.png")',
        key: 6,
    },
    {
        title: "Vitun hyvä ja ebin",
        desc: "Track description can be quite lengthy",
        fulldesc: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Nam tempor dui a lacus ultricies luctus. Nullam vitae mauris et nulla gravida efficitur. In tincidunt purus id justo mollis ornare. Quisque venenatis nisi ac molestie dignissim. Donec fermentum facilisis ligula a blandit. Suspendisse velit elit, dignissim sed efficitur non, pharetra nec est. In iaculis lacus et sem semper sollicitudin. Nam elementum, erat id tempor condimentum, lectus ligula ultricies elit, sit amet commodo eros purus et neque. Proin tincidunt luctus orci, ornare vestibulum purus placerat sed. Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent efficitur ante velit, vitae pharetra felis feugiat eget. In lacinia tempus nisl, in interdum risus ornare eu. Duis imperdiet urna turpis, vitae venenatis risus commodo vitae. ",
        logos: [require("../../../assets/logos/emblem_black.png")],
        background: 'url("/card.png")',
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
        background: 'url("/card.png")',
        key: 8,
    },
];
*/
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
                    title={/*"Tracks & "+*/"Challenges"}
                    //body="The hackathon is divided into tracks based on different industries and themes. All tracks include multiple challenges you can choose to work on during the hackathon: and you can even combine challenges and submit your project to multiple ones!"
                    body="The hackathon is divided into challenges based on different industries and themes. You can choose to work on multiple challenges during the hackathon: and you can even combine them and submit your project to multiple ones!"
                >
                    {/*
                    <Grid spacing={12} direction="row">
                        <Link
                            activeClass="active"
                            to="tracks"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <Button className="Button-default" text="Tracks" />                                
                        </Link>
                        <Link
                            activeClass="active"
                            to="challenges"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            <Button className="Button-default" text="Challenges" />                                
                        </Link>
                    </Grid>
                    */}
                </HeaderSection>
                {/*
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    Tracks
                </SectionImage>

                <Element class="MobileLink" name="tracks" id="tracks" />
                <TrackGrid items={tracks} />
                */}
                {/*
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    Challenges
                </SectionImage>
                */}
                <h2 className="HeaderSection--body ChallengeSubtitle">Here are the challenges for Junction 2020 Connected.</h2>
                <Element class="MobileLink" name="challenges" id="challenges" />
                <ChallengeGrid items={challenges} />
            </Page>
        );
    }
}

export default Challenges;
