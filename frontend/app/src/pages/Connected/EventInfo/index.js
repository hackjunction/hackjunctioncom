import React, { PureComponent, Suspense } from "react";
import "./style.scss";

import KEYS from "../../../redux/staticcontent/keys";
import MEDIA_KEYS from "../../../redux/staticmedia/keys";

import SectionImage from "../../../components/SectionImage";
import { Grid, Container, Typography } from "@material-ui/core";
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
                    <Grid spacing={6} direction="row">
                        <SmallButton
                            className="Connected-button"
                            to
                            text="General"
                        />
                        <SmallButton
                            className="Connected-button"
                            to
                            text="Schedule"
                        />
                        <SmallButton
                            className="Connected-button"
                            to
                            text="FAQ"
                        />
                        <SmallButton
                            className="Connected-button"
                            to
                            text="For Partners"
                        />
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
                <Container className="Timeline--outer">
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        className="EventInfo--Timeline--outer"
                    >
                        <Grid item className="EventInfo--Timeline--outer--left">
                            <img
                                src={require("../../../assets/images/connected-chain.png")}
                            />
                        </Grid>

                        <Grid
                            item
                            className="EventInfo--Timeline--outer--right"
                        >
                            {/* <span className="EventInfo--circle"></span> */}
                            Testing
                        </Grid>
                    </Grid>
                </Container>
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
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="strech"
                    >
                        <SmallButton
                            className="Connected-button"
                            to
                            text="General"
                        />
                        <SmallButton
                            className="Connected-button"
                            to
                            text="Schedule"
                        />
                        <SmallButton
                            className="Connected-button"
                            to
                            text="About partners"
                        />
                        <SmallButton
                            className="Connected-button"
                            to
                            text="Submissions"
                        />
                    </Grid>
                </HeaderSection>
                <Container>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <QuestionCard number="1" text="WHAT is a hackathon" />

                        <QuestionCard number="2" text="WHAT is a hackathon" />

                        <QuestionCard number="3" text="WHAT is a hackathon" />

                        <QuestionCard number="4" text="WHAT is a hackathon" />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                    >
                        <Typography>
                            Didn’t find what you were looking for? Our team is
                            happy to help you with anything and everything, just
                            shoot us a message!
                        </Typography>
                        <SmallButton
                            className="Connected-button"
                            to
                            text="CONTACT US FOR MORE INFORMATION"
                        />
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
