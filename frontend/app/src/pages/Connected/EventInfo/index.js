import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import { Grid } from "@material-ui/core";

import Page from "../../PageHOC";
import SmallButton from "../../../components/SmallButton";
import HeaderSection from "../../../components/HeaderSection";

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
                        <SmallButton to text="General" />
                        <SmallButton to text="Schedule" />
                        <SmallButton to text="FAQ" />
                        <SmallButton to text="For Partners" />
                    </Grid>
                </HeaderSection>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    General information
                </SectionImage>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    Challenges
                </SectionImage>
            </Page>
        );
    }
}

export default Challenges;
