import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import { Grid, Container } from "@material-ui/core";
import CenteredBlock from "../../../components/CenteredBlock";
import EventCalendar from "../../../components/EventCalendar";

import Page from "../../PageHOC";
import SmallButton from "../../../components/SmallButton";
import HeaderSection from "../../../components/HeaderSection";
import QuestionGrid from "../../../components/questions/QuestionCard/QuestionCard";
import QuestionCard from "../../../components/questions/QuestionCard/QuestionCard";

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
                    title="Event information"
                    body="TLorem ipsum dolor sit arem lorem ipsum dolor sit amet lorem ipsum dolor sit"
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
                    Timeline
                </SectionImage>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    FAQ
                </SectionImage>
                <HeaderSection
                    title="FAQ"
                    body="TLorem ipsum dolor sit arem lorem ipsum dolor sit amet lorem ipsum dolor sit"
                >
                    <Grid spacing={12} direction="row">
                        <Button smaller to text="General" />
                        <Button smaller to text="Schedule" />
                        <Button smaller to text="About partners" />
                        <Button smaller to text="Submissions" />
                    </Grid>
                </HeaderSection>
                <Container>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <QuestionCard number="1" text="WHAT is a hackathon" />

                        <QuestionCard number="2" text="WHAT is a hackathon" />

                        <QuestionCard />

                        <QuestionCard />
                    </Grid>
                </Container>
                <SectionImage
                    imageKey={MEDIA_KEYS.homePageHeaderImage}
                    alt="Header image"
                >
                    For Partners
                </SectionImage>
                Tähän sisältöö
            </Page>
        );
    }
}

export default Challenges;
